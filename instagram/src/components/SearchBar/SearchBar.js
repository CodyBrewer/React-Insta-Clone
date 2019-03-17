import React from 'react';
import './SearchBar.css';
import { Instagram } from 'react-feather';
import SearchForm from './SearchForm';


const SearchBar = props => {
    return(
        <>
            <Instagram />
            <span>|</span>
            <h1>Instagram</h1>
            <SearchForm />
        </>
    )
}


export default SearchBar;