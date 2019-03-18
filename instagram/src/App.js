import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: dummyData
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar />
          <PostContainer posts = {this.state.posts} />
        </header>
      </div>
    );
  }
}

export default App;
