import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../../DataContext';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'

function ReviewDetails(props) {
	const [currentRead, setCurrentRead] = useState();
	const { isbn } = useParams();
	const { myReads } = useContext(DataContext);
    console.log('hello from review-details')

	useEffect(() => {
		let targetRead = myReads.filter((read) => read.isbn_10 === isbn);
		console.log(targetRead);
		setCurrentRead([...targetRead]);
	}, []);

	if (!currentRead) {
		return <h2>Loading Review...</h2>;
	}

	return (
		<div>
			{currentRead.map((read) => (
				<div className='tbr-item'>
					<img
						id='my-reads-cover'
						src={`http://covers.openlibrary.org/b/isbn/${read.isbn_10}.jpg`}
						alt='book-cover'
					/>
					<div className='review-details'>
						<h3>{read.title}</h3>
						<p>
							Rating: {read.rating} <span></span>
						</p>
						<p>Review Title: {read.reviewTitle}</p>
						<p>Review: {read.review}</p>
						<Link to={`/my-reads/${read.isbn_10}`}>
							<button className='review-btn'>Edit</button>
						</Link>
					</div>
				</div>
			))}
		</div>
	);
}

export default ReviewDetails;
