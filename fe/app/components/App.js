import React from 'react';
import MyMenu from './MyMenu';
import { Container, Header } from "semantic-ui-react";

const App = () => {
    return (
           <Container>
               {/* <Header as="h2">Morden Blog</Header> */}
               <MyMenu/>
           </Container>
    );
};

export default App;