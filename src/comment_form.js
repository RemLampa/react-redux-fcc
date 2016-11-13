import React, {Component} from 'react';

import { Button } from 'react-bootstrap';

class CommentForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: '',
      message: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({
      name: '',
      message: ''
    })
  }

  handleChange(field, event) {
    let commentField = {};

    commentField[field] = event.target.value;

    this.setState(commentField);
  }

  render() {
    return (
      <form className="text-center" onSubmit={this.handleSubmit}>
        <fieldset className="row">
        <label>Name:
          <input className="form-control" type="text" value={this.state.name} onChange={this.handleChange.bind(this, 'name')} />
        </label>
        </fieldset>
        <fieldset className="row">
        <label>Message:
          <textarea className="form-control" value={this.state.message} onChange={this.handleChange.bind(this, 'message')} />
        </label>
        </fieldset>
        <Button type="submit">Add Comment</Button>
      </form>
    );
  }
}

export default CommentForm;
