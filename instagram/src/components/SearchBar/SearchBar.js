import React from 'react';
import './SearchBar.scss';
import { Instagram} from 'react-feather';
import SearchForm from './SearchForm';
import SearchBarIcons from './SearchBarIcons';


const SearchBar = props => {
    return(
        <div className="searchbar-container">
            <div className="searchbar-logo">
                <Instagram />
                <span>|</span>
                <h1>Instagram</h1>
            </div>
            <SearchForm />
            <SearchBarIcons />
        </div>
    )
}


export default SearchBar;