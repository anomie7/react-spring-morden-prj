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
    }

    _goPost(postKey){
        console.log(postKey);
        this.history.push('/posts/' + postKey)
    }

    render(){
        return (
        <Container className="home-container">
        <Segment className="home-segment">
            <Header as="h2" content="Posts"/>
            <Divider>
            </Divider>
            <Item.Group>
                {this.state.posts.map( (post, i) =>{
                    return (<Post 
                                subject={post.subject}
                                key ={i}
                                postKey = {i} 
                                category = {post.category} 
                                createDate = {post.createDate} 
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