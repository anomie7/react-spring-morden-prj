import React from "react";
import { Container, Segment, Header, Divider } from "semantic-ui-react";

class PostReader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            post: this.props.posts[this.props.match.params.postNum]
        }
        console.log(this.state.post);
    }

    render(){
        var postNum = this.props.match.params.postNum;
        var subject = this.state.post.subject;
        var writer = this.state.post.createDate;
        var content = this.state.post.content;
        var category = this.state.post.category;
        return (
            <Container className="home-container">
                <Segment className="home-segment">
                    <Header as="h2" content= {postNum + " 번째 글"}/>
                    <Divider section>
                    </Divider>
                    <Segment>
                        <p>제목: {subject}</p>
                        <p>카테고리: {category}</p>
                        <p>작성자: {writer}</p>
                        <p>본문: {content}</p>
                    </Segment>
                </Segment>
            </Container>
        )
    }
}

export default PostReader;