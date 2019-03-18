import React from 'react';
import {Compass, Heart, User} from 'react-feather';
import './SearchBar.scss';

const SearchBarIcons = props => {
    return(
        <div className="searchbar-user-icons">
            <Compass />
            <Heart />
            <User />
        </div>
    )
}
export default SearchBarIcons;