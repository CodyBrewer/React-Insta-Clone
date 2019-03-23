import React from "react";
import PropTypes from "prop-types";
import "./CommentSection.scss";

const Comment = props => {
  return (
    <div className="comment-text">
      <div className="user">{props.comment.username}</div>{" "}
      <span className="comment">{props.comment.text}</span>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
