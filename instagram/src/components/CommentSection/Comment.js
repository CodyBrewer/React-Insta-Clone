import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import Username from '../Styles/Reusable';

const CommentContainer = styled.div`
  text-align: left;
  padding: 2px;
  margin-left: 2%;
  display: flex;
  align-items: center;
`
const CommentText = styled.div`
  margin: 5px;
  font-weight: 300;
  font-size: 14px;
`

const Comment = props => {
  return (
    <CommentContainer>
      <Username>{props.comment.username}&nbsp;</Username>
      <CommentText>{props.comment.text}</CommentText>
    </CommentContainer>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
