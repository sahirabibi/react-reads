import React from 'react';
import { useState, useContext } from 'react';
import { DataContext } from '../../DataContext';
import { useHistory } from 'react-router-dom';

function Search(props) {
	// run a call to openLibrary and return book with selected format
	// search can be with author, subject, title, isbn
	const { updateSearchResults } = useContext(DataContext);
	const history = useHistory();

	const initialState = {
		title: '',
	};
	const [searchQuery, setSearchQuery] = useState(initialState);
	const [formattedQuery, setFormattedQuery] = useState(initialState);

	function handleChange(event) {
		// update searchQuery with users key-words
		// split and add + on spaces to format query for API call
		setSearchQuery({ ...searchQuery, [event.target.id]: event.target.value });
		let rawStr = event.target.value;
		let formattedStr = rawStr.replace(/\s+/g, '+').toLowerCase();
		setFormattedQuery({ ...formattedQuery, [event.target.id]: formattedStr });
	}

	function handleSubmit(event) {
		// send data to func and retrieve results
		event.preventDefault();
		updateSearchResults(formattedQuery);
		history.push('/search/results');
		setSearchQuery(initialState);
	}

	return (
		<div>
			<nav className='search-nav'>
				<form className='search-form' action=''>
					<label className='search-label' htmlFor='search'>
						Search
					</label>
					<input
						onChange={handleChange}
						type='text'
						id='title'
						placeholder='title'
						value={searchQuery.title}
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
