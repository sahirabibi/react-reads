import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { DataContext } from '../../DataContext';
import axios from 'axios';
import { Route } from 'react-router-dom'

function MyReads(props) {
	// when add button is clicked, book should be added to a state component that should be updated and sent down and rendered
	const { myReads, myReviews} = useContext(DataContext);
	const isbn = '' // filter books for specific book 
	// grab the current review if available
	// const currentReview = myReviews.filter(review => review.isbn[10][0] === '')

	// grab cover using isbn data
	useEffect(() => {
		axios()
			.then((res) => res.data)
			.catch((err) => console.log(err));
	}, []);

	// list author /
	// const authorAPI : https://openlibrary.org/authors/OL23919A.json
    // const coverAPI:

	if (!myReads) {
		return <h5>Add books to your Reads list to get started!</h5>;
	}

	return (
		<div className='tbr-item'>
			<h2>My Reads and Reviews</h2>
			{myReads.map((read) => {
				return (
					<Link key={read.isbn_10[0]} to={`/my-reads/${read.isbn_10[0]}`}>
						<div className='my-reads-list'>
							<img
								id='my-reads-cover'
								src={`http://covers.openlibrary.org/b/isbn/${read.isbn_10[0]}.jpg`}
								alt='book-cover'
							/>
							<div className='reads-container'>
								<li className='tbr-title'>{read.title}</li>
								{/* <li>{read.author}</li> */}
								<li>Page Count: {read.number_of_pages}</li>
								{myReviews.map((review) =>
									review.isbn === read.isbn_10[0] ? (
										<div>
											Rating: <p>{review.rating}</p>{' '}
										</div>
									) : (
										''
									)
								)}
								
								{myReviews.map((review) =>
									review.isbn === read.isbn_10[0] ? (
										<div>Review: <p>{review.review.substring(0, 250)}</p> </div>
									) : (
										// '<button>Add Review</button>' 
										''
									)
								)}
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	);
}

export default MyReads;
