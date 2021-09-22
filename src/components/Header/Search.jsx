import React from 'react';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { DataContext } from '../../DataContext';
import { Link, Redirect } from 'react-router-dom';
import {useHistory} from 'react-router-dom'

function Search(props) {
	// run a call to openLibrary and return book with selected format
	// search can be with author, subject, title, isbn
	const { searchResults, updateSearchResults } = useContext(DataContext);
	const history = useHistory()

	const initialState = {
		title: '',
		author: '',
		isbn: '',
	};
	const [searchQuery, setSearchQuery] = useState(initialState);
	const [formattedQuery, setFormattedQuery] = useState(initialState)

	function handleChange(event) {
		// update searchQuery with users key-words
		// split and add + on spaces
		setSearchQuery({...searchQuery, [event.target.id] : event.target.value})
		let rawStr = event.target.value;
		let formattedStr = rawStr.replace(/\s+/g, '+').toLowerCase();
		setFormattedQuery({ ...formattedQuery, [event.target.id]: formattedStr });
	}

	function handleSubmit(event) {
		// submit to searchAPI and retrieve results
		event.preventDefault();
		updateSearchResults(formattedQuery);
		history.push('/search/results');
		setSearchQuery(initialState)
		
	}

	return (
		<div>
			<nav className='search-nav'>
				<form className='search-form' action=''>
					<label className='search' htmlFor='search'>
						Search
					</label>
					<input
						onChange={handleChange}
						type='text'
						id='title'
						placeholder='title'
						value={searchQuery.title}
					/>
					<input
						onChange={handleChange}
						type='text'
						id='author'
						placeholder='author'
						value={searchQuery.author}
					/>
					<input
						onChange={handleChange}
						type='text'
						id='isbn'
						placeholder='isbn'
						value={searchQuery.isbn}
					/>
					<button id='submit-btn' type='submit' onClick={handleSubmit}>
						Submit
					</button>
				</form>
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
