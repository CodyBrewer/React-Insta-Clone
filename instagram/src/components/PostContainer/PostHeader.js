import React from "react";
import "./PostContainer.scss";

const PostHeader = props => {
  return (
    <div className="post-header">
      <div className="post-thumbnail">
        <img
          alt="post header"
          className="post-user-image"
          src={props.thumbnailUrl}
        />
      </div>
      <div className="post-username">{props.username}</div>
    </div>
  );
};

export default PostHeader;
