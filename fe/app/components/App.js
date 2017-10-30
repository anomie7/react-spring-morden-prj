import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import When from 'when';
import { Container, Segment } from "semantic-ui-react";
import update from 'react-addons-update';
import MyMenu from './MyMenu';
import Editor from "./routes/Editor";
import Home from "./routes/Home";
import About from "./routes/About";
import Posts from "./routes/Posts";
import NoMatch from "./routes/NoMatch";
import UpdateEditor from "./routes/UpdateEditor";
import PostReader from "./routes/PostReader"
import client from "../js/client";
import follow from "../js/follow"

function getNowDate(){
    var rightNow = new Date();
    var yyyy = rightNow.getFullYear();
    var mm = rightNow.getMonth() + 1;
    var dd = rightNow.getDate();
    var hh = rightNow.getHours();
    var m = rightNow.getMinutes();
    var s = rightNow.getSeconds();
    return yyyy + "-" + mm + "-" + dd + " " + hh + ":" + m + ":" + s;
}

const root = '/api';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            updatePost: {
                subject: "",
                writer: "",
                createDate: "",
                content: "",
                category: ""
            },
            postNum : -1,
            pageSize: 2,
            links: {},
            attributes: []
        };
    }

    componentDidMount() {
      this.loadFromServer(this.state.pageSize);
    };


    loadFromServer(pageSize){
        follow(client, root, [
            {rel: 'posts', params: {size: pageSize}}]
        ).then(postsCollection => {
            return client({
                method: 'GET',
                path: postsCollection.entity._links.profile.href,
                headers: {'Accept': 'application/schema+json'}
            }).then(schema => {
                this.schema = schema.entity;
                this.links = postsCollection.entity._links;
                return postsCollection;
            });
        }).then(postsCollection => {
            return postsCollection.entity._embedded.posts.map( post => 
                client({
                    method: 'GET',
                    path: post._links.self.href
                })
            );
        }).then(postPromises => {
            return When.all(postPromises);
        }).then(posts => {
            this.setState({
                posts: posts,
                attributes: Object.keys(this.schema.properties),
                pageSize: pageSize,
                links: this.links
            });
            console.log(this.state);
        });
    }

    _InsertPost(post, history){
        post['createDate'] = getNowDate();
        follow(client, root, ['posts']).then(postsCollection => {
            return client({
                method: 'POST',
                path: postsCollection.entity._links.self.href,
                entity: post,
                headers: {'Content-Type': 'application/json'}
            })
        }).then(res =>{
            console.log('post 완료');
            console.log(res);
            return follow(client, root, [{
                rel: 'posts', params: {'size': this.state.pageSize}
            }]);
        }).then(postsCollection => {
               this.links = postsCollection.entity._links;
               return postsCollection.entity._embedded.posts.map( post => 
                client({
                    method: 'GET',
                    path: post._links.self.href
                })
            )
        }).then(postPromises => {
            return When.all(postPromises);
        }).then(posts => {
            this.setState({
                posts: posts,
                attributes: Object.keys(this.schema.properties),
                pageSize: this.state.pageSize,
                links: this.links
            });
            console.log(this.state);
            history.push('/posts')
        })
    };

    _deletePost(key, history, post){
        console.log(key);
        console.log(post);
        console.log(post.url);
        client({
            method: 'DELETE',
            path: post.url
        }).then(res =>{
            console.log('delete 완료');
        })


        this.setState({
            posts: update(
                this.state.posts, 
                {
                    $splice: [[key, 1]]
                }
            )
        });
        history.goBack();
    }

    _updatePost(post, postNum){
        this.setState({
            updatePost: post,
            postNum: postNum
        });
        console.log(this.state.postNum);
    }

    _modifyPost(post, postNum){
        console.log(post);
        console.log(postNum);
        this.setState({
            posts: update(
                this.state.posts,
                {
                    [postNum] : {
                        subject: {$set: post.subject},
                        writer: {$set: post.writer},
                        createDate: {$set: post.createDate},
                        content: {$set: post.content},
                        category: {$set: post.category}
                    }
                }
            )
        });
    }

    render(){
        return (
        <Router>
            <Container className="app-container">
            <MyMenu/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route exact path="/posts" render = {(props) => <Posts {...props} posts={this.state.posts}/>}/>
                    <Route exact path="/posts/editor" render = {(props) => <Editor {...props} 
                                                                             InsertPost={this._InsertPost.bind(this)} />} />
                    <Route exact path="/posts/:postNum" render = {(props)=> <PostReader {...props} 
                                                                                  posts={this.state.posts} 
                                                                                  deletePost={this._deletePost.bind(this)}
                                                                                  updatePost={this._updatePost.bind(this)}/>
                                                                                }/>
                    <Route path="/ueditor" render = {(props) => <UpdateEditor post={this.state.updatePost} 
                                                                              {...props}
                                                                              postNum = {this.state.postNum}
                                                                              modifyPost={this._modifyPost.bind(this)} />} />
                    <Route component={NoMatch}/>
                </Switch>
            <Segment>footer</Segment>
            </Container>
        </Router>   
    );
    }
}


export default App;