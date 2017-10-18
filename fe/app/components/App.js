import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import MyMenu from './MyMenu';
import Home from "./routes/Home";
import About from "./routes/About";
import Posts from "./routes/Posts";

const App = () => {
    return (
        <Router>
           <Container>
               <MyMenu/>
               <Route exact path="/" component={Home}/>
               <Route path="/about" component={About}/>
               <Route path="/posts" component={Posts}/>
           </Container>
        </Router>
    );
};

export default App;