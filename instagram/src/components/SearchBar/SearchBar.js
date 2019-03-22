import React, {Component} from "react";
import "./SearchBar.scss";
import { Instagram } from "react-feather";
import SearchForm from "./SearchForm";
import SearchBarIcons from "./SearchBarIcons";

class SearchBar extends Component{
  constructor(props){
    super(props);
  }

  logOut = () => {
    localStorage.clear();
    window.location.reload();
  }

  render(){
    return (
      <div className="searchbar-container">
        <div className="searchbar-logo">
          <Instagram />
          <span>|</span>
          <h1>Instagram</h1>
        </div>
        <SearchForm searchPosts={this.props.searchPosts} />
        <SearchBarIcons logOut={this.logOut} />
      </div>
    );
  }
};

export default SearchBar;
