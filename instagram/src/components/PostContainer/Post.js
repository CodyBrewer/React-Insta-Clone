import React, {Component }from "react";
import CommentSection from "../CommentSection/CommentSection";
import PostHeader from "./PostHeader";

import "./PostContainer.scss";
import PropTypes from "prop-types";
import LikeSection from "./LikeSection";
import styled from 'styled-components';

const PostBorder = styled.div`
  border: 1px solid #d3d3d3;
  margin: 1px 0;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`
const PostImage = styled.img`
  height: 100%;
  width: 100%;
`
class Post extends Component{
  constructor(props){
    super(props);
    this.state = {
      likes: this.props.post.likes
    }
  }

  likeIncrement = () =>{
    let likes = this.props.post.likes;
    likes++;
    this.setState({likes})
  }

  render(){
    return (
      <PostBorder>
        <PostHeader
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
          />
          <PostImage
            alt="post thumbnail"
            className="post-image"
            src={this.props.post.imageUrl}
            />
        <LikeSection likeIncrement={this.likeIncrement} likes={this.state.likes}/>

        <CommentSection comments={this.props.post.comments} />
      </PostBorder>
    );
  };
}

export default Post;
