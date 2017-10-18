import React from 'react';
import { Header, Container, Segment, Divider, Button } from "semantic-ui-react";

const Posts = () => {
    return (
        <Container className="home-container">
            <Segment className="home-segment">
                <Header as="h2" content="Posts"/>
                <Divider section>
                </Divider>
                <Segment>
                    <p>제목</p>
                    <p>카테고리 날짜</p>
                </Segment>
                <Segment>
                    <p>제목</p>
                    <p>카테고리 날짜</p>
                </Segment>
                <Segment>
                    <p>제목</p>
                    <p>카테고리 날짜</p>
                </Segment>
                <Segment>
                    <p>제목</p>
                    <p>카테고리 날짜</p>
                </Segment>
                <Divider section>
                </Divider>
                <Button basic floated="right">글쓰기</Button>
            </Segment>
        </Container>
    );
};

export default Posts;