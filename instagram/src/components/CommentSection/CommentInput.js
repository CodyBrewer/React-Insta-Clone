import React from 'react';

const CommentInput = props => {
  return (
    <form onSubmit={props.commentSubmitHandler}>
      <input type="text" placeholder="Add comment... " />
    </form>
  );
};

export default CommentInput;