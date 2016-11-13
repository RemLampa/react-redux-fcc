import React, { Component } from 'react';

import CommentList from './comment_list';
import CommentForm from './comment_form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      comments: [
        { name: 'john', message: 'hey' },
        { name: 'paul', message: 'wow' },
        { name: 'peter', message: 'yo' }
      ]
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(comment) {
    const comments = this.state.comments;

    comments.push(comment);

    this.setState(comments);
  }

  render() {
    return (
      <div>
        <CommentForm onSubmit={this.handleSubmit}/>
        <CommentList comments={this.state.comments}/>
      </div>
    );
  }
}

export default App;

// JSX syntax - simply a templating syntax that allows html to be used inside javascript
