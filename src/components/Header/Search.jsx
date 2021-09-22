import React from 'react';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { DataContext } from '../../DataContext';
import { Link } from 'react-router-dom';

function Search(props) {
	// run a call to openLibrary and return book with selected format
	// search can be with author, subject, title, isbn
	const { searchResults, updateSearchResults } = useContext(DataContext);

	const [searchQuery, setSearchQuery] = useState({
		title: '',
		author: '',
		isbn: '',
		subject: '',
	});

	function handleChange(event) {
		// update searchQuery with users key-words
		// split and add + on spaces
		let rawStr = event.target.value;
		let formattedStr = rawStr.replace(/\s+/g, '+').toLowerCase();
		setSearchQuery({ ...searchQuery, [event.target.id]: formattedStr });
	}

	function handleSubmit(event) {
		// submit to searchAPI and retrieve results
		event.preventDefault();
		updateSearchResults(searchQuery);
		
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
					<Link to='/search/results'>
						<input id='submit-btn' type='submit' onClick={handleSubmit}></input>
					</Link>
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
