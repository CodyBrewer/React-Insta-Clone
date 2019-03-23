import React from "react";
import "./PostContainer.scss";
import styled from 'styled-components';
import Username from '../Styles/Reusable';

const PostsHeader = styled.div`
  display: flex;
  margin-left: 10px;
`
const PostThumbnail = styled.div`
  height: 50px;
  width: 50px;
`

const UserImage = styled.img`
  border-radius: 50%;
`


const PostHeader = props => {
  return (
    <PostsHeader>
      <PostThumbnail>
        <UserImage
          alt="post header"
          className="post-user-image"
          src={props.thumbnailUrl}
          />
      </PostThumbnail>
      <Username>{props.username}</Username>
    </PostsHeader>

  );
};

export default PostHeader;
