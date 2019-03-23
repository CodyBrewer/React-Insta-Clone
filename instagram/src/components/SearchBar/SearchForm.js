import React from "react";
import { Search } from "styled-icons/feather/Search";
import styled from 'styled-components';


const InputContainer = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
`
const SearchInput = styled.input`
  height: 30px;
  text-align: center;
  color: #999999;
`
const SearchIcon = styled(Search)`
  height: 25px;
  position: absolute;
`

const SearchForm = props => {
  return (
    <InputContainer>
        <SearchIcon />
        <SearchInput
          placeholder="Search"
          id="search-input"
          onKeyDown={props.searchPosts}
        />
    </InputContainer>
  );
};
export default SearchForm;
