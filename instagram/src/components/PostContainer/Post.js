import React, {Component }from "react";
import CommentSection from "../CommentSection/CommentSection";
import PostHeader from "./PostHeader";

import "./PostContainer.scss";
import PropTypes from "prop-types";
import LikeSection from "./LikeSection";

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
      <div className="post-border">
        <PostHeader
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <div className="post-image">
          <img
            alt="post thumbnail"
            className="post-image"
            src={this.props.post.imageUrl}
          />
        </div>
        <LikeSection likeIncrement={this.likeIncrement} likes={this.state.likes}/>

        <CommentSection comments={this.props.post.comments} />
      </div>
    );
  };
}

export default Post;
