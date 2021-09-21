import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { DataContext } from '../../DataContext';
import axios from 'axios';
import { Route } from 'react-router-dom';

function MyReads(props) {
	// when add button is clicked, book should be added to a state component that should be updated and sent down and rendered
	const { myReads } = useContext(DataContext);

	if (!myReads) {
		return <h5>Add books to your Reads list to get started!</h5>;
	}

	return (
		<div className='tbr-item'>
			<h2>My Reads and Reviews</h2>
			{myReads.map((read) => {
				return (
					<Link key={read.isbn_10} to={`/my-reads/${read.isbn_10}`}>
						<div className='my-reads-list'>
							<img
								id='my-reads-cover'
								src={`http://covers.openlibrary.org/b/isbn/${read.isbn_10}.jpg`}
								alt='book-cover'
							/>
							<div className='reads-container'>
								<li className='tbr-title'>{read.title}</li>
								{/* <li>{read.author}</li> */}
								<li>Page Count: {read.num_pages}</li>
								<div>
									Rating: <p>{read.rating}</p>
								</div>
								<div>
									Review: <p>{read.review.substring(0, 250)}</p>{' '}
								</div>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
}

export default MyReads;
