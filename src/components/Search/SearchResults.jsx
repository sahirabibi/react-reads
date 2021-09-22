import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../../DataContext';

function SearchResults() {
	// show search results using an API call on each query and render title, author, isbn and cover image
	const { searchResults, updateMyReads } = useContext(DataContext);

	if (searchResults.length < 1) {
		return <h2>Loading Search...</h2>;
	}

	return (
		<div className='search-result-item'>
			<h3>Showing Results</h3>
			{searchResults.map((result) => {
				return (
					<div className='search-container'>
						<img
							src={`http://covers.openlibrary.org/b/isbn/${result.isbn[0]}.jpg`}
							alt='book-cover'
							id='search-image'
						/>
						<div className='search-details'>
							<p>Title: {result.title}</p>
							<p>Author: {result.author_name ? result.author_name[0] : 'no author'}</p>
							<ul id='subject-list'>
								{result.subject
									? result.subject
											.slice(0, 1)
											.map((sub) => <li>Subject: {sub}</li>)
									: 'no subjects to display'}
							</ul>

							<button
								id='add-search-item'
								onClick={() => updateMyReads(result.isbn[0])}>
								Add to My Reads
							</button>
							<a
								target='_blank'
								href={`https://openlibrary.org/isbn/${result.isbn[0]}`}
								rel='noreferrer'>
								<button id='view-search-btn'>View Book at Open Library</button>
							</a>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default SearchResults;
