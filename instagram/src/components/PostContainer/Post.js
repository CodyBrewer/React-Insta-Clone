import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import {Heart, MessageCircle} from 'react-feather';
import './PostContainer.scss';
import PropTypes from 'prop-types';

const Post = props => {
  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <div className="like-section">
        <div className="like-icons">
          <Heart />
          <MessageCircle />
        </div>
        <div className="likes">Likes {props.post.likes}</div>
      </div>
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;