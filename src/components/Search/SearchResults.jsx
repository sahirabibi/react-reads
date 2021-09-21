import React from 'react';
import {useState, useEffect, useContext} from 'react';
import { DataContext } from '../../DataContext';


function SearchResults(props) {
    // show search results using an API call on each query and render title, author, isbn and cover image
    const { searchResults } = useContext(DataContext);
    let work = '';

    const workURL = `https://openlibrary.org/${work}.json`;




    return (
        <div>
            
        </div>
    );
}

export default SearchResults;