import React from "react";
import styled from 'styled-components';

const CommentInputter = styled.input`
  width: 100%;
`

const CommentInput = props => {
  return (
    <form onSubmit={props.commentSubmitHandler}>
      <CommentInputter
        type="text"
        placeholder="Add comment... "
        value={props.comment}
        onChange={props.commentHandler}
      />
    </form>
  );
};

export default CommentInput;
