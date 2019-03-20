import React, {Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';
class PostsPage extends Component{
    constructor(){
        super();
        this.state = {
          posts: [],
          filteredPosts: []
        };
    }
    componentDidMount(){
    this.setState({posts: dummyData});
    }
    searchPosts = e => {
    const posts = this.state.posts.filter(post => {
        if (post.username.includes(e.target.value)) {
        return post;
        }
    })
    this.setState({ filteredPosts: posts});
    }
    render(){
    return(
        <div>
            <SearchBar searchTerm={this.state.searchTerm}
                searchPosts = {this.searchPosts} />
            <PostContainer 
            posts = {this.state.filteredPosts.length >0 
            ? this.state.filteredPosts
            : this.state.posts} />
        </div>
    )
    }
}

export default PostsPage;