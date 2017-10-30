import React from "react";
import { Container, Segment, Header, Divider, Button } from "semantic-ui-react";

class PostReader extends React.Component{
    constructor(props){
        super(props);
        this.postNum = this.props.match.params.postNum;
        this.history = this.props.history
        this.post = this.props.posts[this.postNum];
        console.log(this.post);
    }

    handleClick(){
        this.history.goBack();
    }

    deletePost(){
        var postNum = this.postNum;
        this.props.deletePost(postNum, this.history, this.post);
    }

    updatePost(){
        this.props.updatePost(this.post, this.postNum);
        this.history.push('/ueditor');
    }

    render(){
        return (
            <Container className="home-container">
                <Segment className="home-segment">
                    <Header as="h2" content= {this.postNum + " 번째 글"}/>
                    <Divider section>
                    </Divider>
                    <Segment>
                        <p>제목: {this.post.entity.subject}</p>
                        <p>카테고리: {this.post.entity.category}</p>
                        <p>작성자: {this.post.entity.writer}</p>
                        <p>본문: {this.post.entity.content}</p>
                    </Segment>
                    <Button onClick={this.handleClick.bind(this)} basic content="목록"/>
                    <Button onClick={this.updatePost.bind(this)} basic content="수정"/>
                    <Button onClick={this.deletePost.bind(this)} basic content="삭제"/>
                </Segment>
            </Container>
        )
    }
}

export default PostReader;