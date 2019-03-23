import React from "react";
import Post from "./Post";
import "./PostContainer.scss";
import styled from 'styled-components';

const PostsContainer = styled.div`
  height: 500px;
  margin: 0px auto;
`

const PostContainer = props => {
  return (
    <PostsContainer>  
      {props.posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </PostsContainer>
  );
};

export default PostContainer;
