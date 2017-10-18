import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css';
import './css/main.css'

const rootElement = document.getElementById('react');    
ReactDOM.render(<App/>, rootElement);

if (module.hot) {
    module.hot.accept();
  }