import React from 'react';
import './SearchBar.scss';
import { Instagram, Compass, Heart, User} from 'react-feather';
import SearchForm from './SearchForm';


const SearchBar = props => {
    return(
        <div className="searchbar-container">
            <div className="searchbar-logo">
                <Instagram />
                <span>|</span>
                <h1>Instagram</h1>
            </div>
            <SearchForm />
            <div className="searchbar-user-icons">
                <Compass />
                <Heart />
                <User />
            </div>
        </div>
    )
}


export default SearchBar;