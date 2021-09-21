import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../../DataContext';

function MyReviews(props) {
	// add a review for the selected book
	// display book and beneath it display the review
	const { isbn } = useParams();
	const { myReads } = useContext(DataContext);
    const currentRead = myReads.filter((read) => read.isbn_10 === isbn);
	const [myReview, setMyReview] = useState({
		review: '',
		rating: '',
		reviewTitle: ''
	});

	// grab the details of this book from myReads
	

	function handleSubmit(event) {
        // update the current reviews with the new review 
        event.preventDefault();
		let index = myReads.findIndex((read) => read.isbn_10 === isbn);
		myReads[index].review = myReview.review;
		myReads[index].rating = myReview.rating;
		myReads[index].reviewTitle = myReview.reviewTitle;
		
    }

	function handleChange(event) {
		setMyReview({...myReview, [event.target.id]: event.target.value });
	}

	return (
		<div className='tbr-item tbr-review'>
			{currentRead.map((item) => (
				<h2>{item.title}</h2>
			))}
			<form className='review-form' onSubmit={handleSubmit}>
				<label htmlFor='review-title'>Title</label>
				<input type='text' id='reviewTitle' onChange={handleChange} />
				<label htmlFor='review'>Review</label>
				<textarea
					class='longInput'
					cols='30'
					rows='10'
					type='text'
					id='review'
					onChange={handleChange}></textarea>
				<label htmlFor='rating'>Rating</label>
				<input type='text' id='rating' onChange={handleChange} />
				<button id='review-submit'>Submit</button>
			</form>
		</div>
	);
}

export default MyReviews;
