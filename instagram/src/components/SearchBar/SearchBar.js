import React, {Component} from "react";
import SearchForm from "./SearchForm";
import SearchBarIcons from "./SearchBarIcons";
import styled from "styled-components";
import { Instagram } from "styled-icons/icomoon/Instagram";


const Header = styled.header`
width: 100%;
display: flex;
justify-content: space-around;
border: 1px solid #d3d3d3;
box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`
const LogoHeader = styled.div`
  width: 33%;
  display: flex;
  line-height: 75px;
  align-items: center;
`;

const Divider = styled.span`
  font-size: 40px;
  margin-bottom: 8px;
`
const LogoInstagram = styled(Instagram)`
  height: 50%;
`

const BrandName = styled.h1`
  font-size: 40px;
  font-family: "Satisfy", cursive;
  margin-top: 15px;
`
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
      <Header>
        <LogoHeader>
          <LogoInstagram />
          <Divider>|</Divider>
          <BrandName>Instagram</BrandName>

        </LogoHeader>
        <SearchForm 
          searchPosts={this.props.searchPosts}
          />
        <SearchBarIcons 
          logOut={this.logOut} 
          />
      </Header>
    );
  }
};

export default SearchBar;
