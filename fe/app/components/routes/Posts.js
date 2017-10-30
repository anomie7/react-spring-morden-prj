import React from 'react';
import { Header, Container, Segment, Divider, Button, Item } from "semantic-ui-react";
import {Link} from 'react-router-dom';
import Post from "./Post";
import Editor from "./Editor";

class Posts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            posts : this.props.posts
        }
        this.history = this.props.history;
        console.log(this.state.posts);
    }

    componentWillReceiveProps(nextProps){
        console.log('Component Will Receive');
;        console.log(nextProps);
        this.setState = {
            posts: nextProps.posts
        }
        console.log(this.state);
    }

    componentWillMount(){
        console.log('component Will Mount');
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate: ");
        console.log(nextProps); //여기서는 방금 insert한 값이 출력됨.
        console.log(nextState);
        console.log(this.state);
        return true;
    }

    componentDidUpdate(){
        console.log('Component Did Update');
    }

    _goPost(postKey){
        console.log(postKey);
        this.history.push('/posts/' + postKey)
    }

    render(){
        console.log('Posts rendering');
        console.log(this.state)
        return (
        <Container className="home-container">
        <Segment className="home-segment">
            <Header as="h2" content="Posts"/>
            <Divider>
            </Divider>
            <Item.Group>
                {this.state.posts.map( (post, i) =>{
                    return (<Post 
                                subject={post.entity.subject}
                                key ={i}
                                postKey = {i} 
                                category = {post.entity.category} 
                                createDate = {post.entity.createDate} 
                                goPost = {this._goPost.bind(this)}/>)
                })}
            <Divider>
            </Divider>
            <Item>
                <Item.Extra>
                   <Button as={Link} to="/posts/editor" basic compact floated="right" className="Post-btn1" >글쓰기</Button>
                   {/* <Button onClick={()=>{history.goBack()}}>취업</Button> */}
                </Item.Extra>
            </Item>
            </Item.Group>
        </Segment>
        </Container>
    )
    };
}

export default Posts;