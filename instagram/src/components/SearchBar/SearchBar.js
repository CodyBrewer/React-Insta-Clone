import React from 'react';
import './SearchBar.css';
import { Instagram } from 'react-feather';


const SearchBar = props => {
    return(
        <>
            <Instagram />
            <span>|</span>
            <h1>Instagram</h1>

        </>
    )
}


export default SearchBar;