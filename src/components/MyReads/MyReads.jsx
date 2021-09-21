import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { DataContext } from '../../DataContext';
import axios from 'axios';
import { Route } from 'react-router-dom';

function MyReads(props) {
	// when add button is clicked, book should be added to a state component that should be updated and sent down and rendered
	const { myReads } = useContext(DataContext);

	if (myReads.length < 1) {
		return <h5>Add books to your Reads list to get started!</h5>;
	}

	return (
		<div className='tbr-item'>
			<h2>My Reads and Reviews</h2>
			{myReads.map((read) => {
				return (
					<div className='my-reads-list'>
						<img
							id='my-reads-cover'
							src={`http://covers.openlibrary.org/b/isbn/${read.isbn_10}.jpg`}
							alt='book-cover'
						/>
						<div className='reads-container'>
							<li className='tbr-title'>{read.title}</li>
							<li>Page Count: {read.num_pages}</li>
							{read.rating ? (
								<div>
									Rating: {read.rating} <span>⭐️</span>
								</div>
							) : (
								''
							)}
							{read.review ? (
								<div>Snippet: {read.review.substring(0, 250)} </div>
							) : (
								''
							)}
							{read.review ? 
								<div>
									<Link to={`/my-reads/${read.isbn_10}`}>
										<button className='review-btn'>Edit</button>
									</Link>
									<Link
										to={`/reviews/details/${read.isbn_10}`}>
										<button className='review-btn'>See Review</button>
									</Link>
								</div> :
								<Link to={`/my-reads/${read.isbn_10}`}>
									<button className='review-btn'>Add Review</button>
								</Link>

							}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default MyReads;
