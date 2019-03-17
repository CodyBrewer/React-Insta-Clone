import React from 'react';
import {InputGroup, InputGroupAddon,Input } from 'reactstrap';
import {  Search } from 'react-feather';

const SearchForm = props => {
    return(
        <div>
            <InputGroup>
            <InputGroupAddon addonType="append">
                    <Search className="icon-search"/>
                <Input placeholder="Search" id="search-input"/>
                </InputGroupAddon>
            </InputGroup>
        </div>
    )
}
export default SearchForm;