import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'react-bootstrap';

const App = () => <Button>Test</Button>;

ReactDOM.render(<App />, document.querySelector('#app'));
