import React, { Component } from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';
import withAuthenticate from './components/authentication/withAuthenticate';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);


class App extends Component {
  render() {
    return (
      <div className="App">
          <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
