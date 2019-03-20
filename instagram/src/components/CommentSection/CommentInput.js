import React from 'react';

const CommentInput = props => {
  return (
    <form onSubmit={props.commentSubmitHandler}>
      <input type="text" 
      placeholder="Add comment... "
      value={props.comment} 
      onChange={props.commentHandler}/>
    </form>
  );
};

export default CommentInput;