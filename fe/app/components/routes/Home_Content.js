import React from 'react';
import { Grid, Segment } from "semantic-ui-react";

const Home_Content = () => {
    return (
        <Grid>
                    <Grid.Row>
                    <Grid.Column width={8}>
                       <Segment>test</Segment>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Segment>test2</Segment>
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                    <Grid.Column width={8}>
                        <Segment>home</Segment>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Segment>hom</Segment>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column width={8}>
                        <Segment>introduction</Segment>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Segment>hello World</Segment>
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column width={8}>
                        <Segment>hello world</Segment>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        <Segment>hello world</Segment>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
    );
};

export default Home_Content;