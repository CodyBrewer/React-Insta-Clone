import React from "react";
import styled from 'styled-components';
import{ Compass, Heart, User } from "styled-icons/feather";

const IconContainer = styled.div`
  align-self: center;
  width: 33%;
  display: flex;
  color: #393939;
  height: 60px;
  align-items: center;
  justify-content: center;
  svg{
    height: 40px;
    width: 20%;
  }
`

// const CompassLogo = styled(Compass)`
//   height: 20px;
// `

const SearchBarIcons = props => {
  return (
    <IconContainer>
      <Compass />
      <Heart />
      <User onClick={props.logOut}/>
    </IconContainer>
    
  );
};
export default SearchBarIcons;
