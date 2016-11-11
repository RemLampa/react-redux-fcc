import React from 'react';

import Comment from './comment';

export default (props) => {
  return (
    <ul className="list-style">
      {props.comments.map(comment => <Comment comment={comment} />)}
    </ul>
  );
};
