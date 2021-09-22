import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { DataContext } from '../../DataContext';

function MyReviews(props) {
	const history = useHistory();
	// add a review for the selected book
	// display book and beneath it display the review
	const { isbn } = useParams();
	const { myReads, setMyReads } = useContext(DataContext);
	const currentRead = myReads.filter((read) => read.isbn_10 === isbn);
	const [myReview, setMyReview] = useState({
		review: '',
		rating: '',
		reviewTitle: '',
	});

	// grab the details of this book from myReads

	function handleSubmit(event) {
		// update the current reviews with the new review
		event.preventDefault();
		let tempReads = [...myReads];
		let index = tempReads.findIndex((read) => read.isbn_10 === isbn);
		tempReads[index].review = myReview.review;
		tempReads[index].rating = myReview.rating;
		tempReads[index].reviewTitle = myReview.reviewTitle;
		setMyReads([...tempReads]);
		history.push('/my-reads');
	}

	function handleChange(event) {
		setMyReview({ ...myReview, [event.target.id]: event.target.value });
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
					// placeholder={currentRead[0].review}
					onChange={handleChange}></textarea>
				<label htmlFor='rating'>Rating</label>
				{/* <input type='text' id='rating' onChange={handleChange} /> */}
				<select onChange={handleChange} id='rating'>
					<option id='rating'>⭐️</option>
					<option id='rating'>⭐️ ⭐️ </option>
					<option id='rating'>⭐️ ⭐️ ⭐️</option>
					<option id='rating'>⭐️ ⭐️ ⭐️ ⭐️</option>
					<option id='rating'>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</option>
				</select>
				<button id='review-submit'>Submit</button>
			</form>
		</div>
	);
}

export default MyReviews;
