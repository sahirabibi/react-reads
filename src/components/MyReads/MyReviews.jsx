import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../../DataContext';

function MyReviews(props) {
	// add a review for the selected book
	// display book and beneath it display the review
	const { isbn } = useParams();
	const { myReads, setMyReads, MyReviews, setMyReviews } = useContext(DataContext);
    const currentRead = myReads.filter((read) => read.isbn_10[0] === isbn);
	const [myReview, setMyReview] = useState({
		title: '',
		review: '',
		rating: null,
	});

	// grab the details of this book from myReads
	

	function handleSubmit(event) {
        // update the current reviews with the new review 
        event.preventDefault();
        setMyReviews([...MyReviews, myReview])
    }


	function handleChange(event) {
		setMyReview({ ...myReview, [event.target.id]: event.target.value });
	}

	return (
		<div>
			{currentRead.map((item) => (
				<h2>{item.title}</h2>
			))}
			<form onSubmit={handleSubmit}>
				<label htmlFor='review-title'>Title</label>
				<input type='text' id='title' onChange={handleChange} />
				<label htmlFor='review'>Review</label>
				<input type='text' id='review' onChange={handleChange} />
				<label htmlFor='rating'>Rating</label>
				<input type='text' id='rating' onChange={handleChange} />
			</form>
		</div>
	);
}

export default MyReviews;
