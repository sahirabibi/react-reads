import React from 'react';
import {useEffect, useState, useContext} from 'react'
import {useParams} from 'react-router-dom'
import { DataContext } from '../../DataContext';


function MyReviews(props) {
    // add a review for the selected book
    // display book and beneath it display the review 
    const { isbn } = useParams()
    const {myReads, setMyReads} = useContext(DataContext)
    const [myReview, setMyReview] = useState({
        title: '',
        review: '',
        rating: ''
    })
    
    // grab the details of this book from myReads 
    const currentRead = myReads.filter(read => read.isbn_10[0] === isbn)
    
    function handleSubmit() {

    }

    function handleChange() {

    }

    return (
			<div>
				{currentRead.map((item) => (
					<h2>{item.title}</h2>
				))}
				<form onSubmit={handleSubmit}>
					<label htmlFor='review-title' onChange={handleChange}>
						Title
					</label>
					<input type='text' />
					<label htmlFor='review' onChange={handleChange}>
						Review
					</label>
					<input type='text' />
				</form>
			</div>
		);
}

export default MyReviews;