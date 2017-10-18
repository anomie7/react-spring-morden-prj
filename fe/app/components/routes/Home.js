import React from 'react';
import { Header, Container, Segment, Divider } from "semantic-ui-react";
import Home_Content from "./Home_Content";

const Home = () => {
    return (
        <Container className="home-container">
            <Segment className="home-segment">
                <Header as="h2" content="홈"/>
                <Divider section>
                </Divider>
                <Home_Content/>
            </Segment>
        </Container>
    );
};

export default Home;