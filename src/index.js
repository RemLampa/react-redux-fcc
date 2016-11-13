import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';

// Placeholder component to test if everything is working fine
// Delete this and create your own app in src/app.js and import it as App in this file
import { Button } from 'react-bootstrap';
const App = () => <Button>Hello World</Button>;

ReactDOM.render(<App />, document.querySelector('#app'));
