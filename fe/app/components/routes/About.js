import React from 'react';
import { Header, Container, Segment, Divider } from "semantic-ui-react";

const About = () => {
    return (
        <Container className="home-container">
            <Segment className="home-segment">
                <Header as="h2" content="소개"/>
                <Divider section>
                    <p>안녕 나는 풀스택 개발자를 지향하는 윤민우</p>
                    <p>이 프로젝트는 React와 Spring boot로 구성했다.</p>
                    <p>상세한 기술스택으로는 </p>
                    <p>백엔드: spring boot (Spring MVC, Spring Security, Spring Data Rest, Spring Date JPA, MySQL, Redis)</p>
                    <p>프론트 엔드: React.js Webpack Semantic-ui를 이용</p>
                    <p>매우 잘 부탁드림</p>
                </Divider>
            </Segment>
        </Container>
    );
};

export default About;