import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../../DataContext';

function SearchResults() {
	// show search results using an API call on each query and render title, author, isbn and cover image
	const { searchResults, updateMyReads } = useContext(DataContext);

	if (searchResults === null) {
		return <h2>Nothing Found! Try a different search!</h2>;
	} else if (!searchResults.length) {
		return <h2>Loading!</h2>;
	}

	return (
		<div className='search-result-item'>
			<h3>Showing Results</h3>
			{searchResults.map((result) => {
				return (
					<div className='search-container'>
						<img
							src={result.isbn ? `https://covers.openlibrary.org/b/isbn/${result.isbn[0]}.jpg` : ''}
							alt='book-cover'
							id='search-image'
						/>
						<div className='search-details'>
							<p>Title: {result.title ? result.title : 'no title'}</p>
							<p>
								Author:{' '}
								{result.author_name ? result.author_name[0] : 'no author'}
							</p>
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
								href={result.isbn ? `https://openlibrary.org/isbn/${result.isbn[0]}` : ''}
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
