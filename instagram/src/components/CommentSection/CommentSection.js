import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: '',
      commentId: props.comments.id
    };
  }
  componentDidMount(){
    const id = this.commentid;
    if(localStorage.getItem(id)){
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.commentId))
      });
    } else {
      this.commentSetter()
    }
  }
  componentWillUnmount(){
    this.commentSetter();
  }

  commentSetter = () => {
    localStorage.setItem(
      this.commentId,
      JSON.stringify(this.state.comments)
    );
  };


  commentSubmitHandler = e => {
    e.preventDefault();
    const newComment = {text: this.state.comment, username: "Big Pete Gregory"}
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({comments, comment: ''});
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment, key) => <Comment key={this.commentId} comment={comment} />)}
        <CommentInput 
          comment={this.state.comment}
          submitComment={this.commentSubmitHandler}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;