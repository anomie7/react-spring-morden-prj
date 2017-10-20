import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts: [
                {
                    subject: '날이 많이 춥네요',
                    writer: '유재석',
                    createDate: '2017-09-11',
                    content: 'ㅁㄹㄴㅁㅇㄻㄴㅇㄹ',
                    category: '홈'
                    
                },
                {
                    subject: '날이 많이 덥네요',
                    writer: '강호동',
                    createDate: '2016-11-22',
                    content: 'ㅁㄴㅇㄹㄴㅇㄹ',
                    category: '리뷰'
                },
                {
                    subject: '취직이 되야할텐데',
                    writer: '강준만',
                    createDate: '2011-05-21',
                    content: 'ㅁㄴㅇㄹㄴㅁㅇㄹ',
                    category: '요리'
                },
                {
                    subject: '컴퓨터다 컴퓨터',
                    writer: '김재석',
                    createDate: '2011-02-11',
                    content: 'ㅁㄴㄹ',
                    category: '맛집'
                }
            ],
            updatePost: {
                subject: "",
                writer: "",
                createDate: "",
                content: "",
                category: ""
            },
            postNum : -1
        };
    }

    _InsertPost(post){
        post['createDate'] = getNowDate();
        let newState = update(this.state, {
            posts: {
                $push: [post]
            }
        });
        this.setState(newState);
    }

    _deletePost(key, history){
        console.log(key);
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