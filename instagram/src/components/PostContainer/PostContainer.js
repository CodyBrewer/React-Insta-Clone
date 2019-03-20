import React from "react";
import Post from "./Post";
import "./PostContainer.scss";

const PostContainer = props => {
  return (
    <div className="posts-container">
      {props.posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostContainer;
