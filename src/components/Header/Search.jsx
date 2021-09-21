import React from 'react';
import { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import { DataContext } from '../../DataContext';

function Search(props) {
    // run a call to openLibrary and return book with selected format 
    // search can be with author, subject, title, isbn 
    const { searchResults, setSearchResults } = useContext(DataContext);

    const [searchQuery, setSearchQuery] = useState({
        title: '',
        author:'',
        isbn: '',
        subject:'',
    })

    function handleChange(event) {
        // update searchQuery with users key-words 
        // split and add + on spaces
        let rawStr = event.target.value;
        let formattedStr = rawStr.replace(/\s+/g, '+').toLowerCase(); 
        setSearchQuery({...searchQuery, [event.target.id] : formattedStr})
    }

    function handleSubmit(event) {
        // submit to searchAPI and retrieve results 
        event.preventDefault();
        const searchURL = `http://openlibrary.org/search.json?q=${searchQuery.title}&author=${searchQuery.author}&isbn=${searchQuery.isbn}`;

        axios.get(searchURL)
            .then(res => setSearchResults([...res.data.docs.slice(0, 20)]))
            .catch(err => console.log(err));
    };
    

    return (
			<div>
				<nav>
					<form action='' onSubmit={handleSubmit}>
						<label htmlFor='search'>Search</label>
						<input
							onChange={handleChange}
							type='text'
							id='title'
							placeholder='title'
						/>
						<input
							onChange={handleChange}
							type='text'
							id='author'
							placeholder='author'
						/>
						<input
							onChange={handleChange}
							type='text'
							id='isbn'
							placeholder='isbn'
						/>
						<input
							onChange={handleChange}
							type='text'
							subject='isbn'
							placeholder='subject'
						/>
						<input type='submit' />
					</form>
					{/* <button>Advanced Search</button> */}
				</nav>
			</div>
		);
}

export default Search;


 // after retrieving results, set them inside of searchResults var
        // render SearchResults page with search results 

        // have add button on each search result, onClick=> searchResults.isbn[0] ==> 'isbn'
        // OnClick call setMyReads();
        // when user hits add, call a a function to grab this var and add it to 
        // 