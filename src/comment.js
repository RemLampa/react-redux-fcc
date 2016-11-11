import React from 'react';

export default props => {
  return (
    <li className="list-style-item">
      <div>Name: {props.comment.name}</div>
      <div>Message: {props.comment.message}</div>
    </li>
  );
}
