import React from 'react';
import Post from './Post';
import './PostContainer.scss';

const PostContainer = props => {
  return (
    <div className="posts-container">
      {props.posts.map(p => <Post key={p.imageUrl} post={p} />)}
    </div>
  );
};

export default PostContainer;