import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../../DataContext';
import { useParams } from 'react-router-dom';

function ReviewDetails(props) {
	// const [currentRead, setCurrentRead] = useState();
	const { isbn } = useParams();
	const { myReads } = useContext(DataContext);
    console.log('hello from review-details')
    let currentRead = myReads.filter((read) => read.isbn_10 === isbn);

	// useEffect(() => {
	// 	let targetRead = myReads.filter((read) => read.isbn_10 === isbn);
	// 	console.log(targetRead);
	// 	setCurrentRead([...targetRead]);
	// }, []);

	if (!currentRead) {
		return <h2>Loading Review...</h2>;
	}

	return (
		<div>
			<h2>Hello</h2>
			{currentRead.map((read) => (
				<div>
					<h2>{read.title}</h2>
					<p>Rating: {read.rating}</p>
					<p>Review Title: {read.reviewTitle}</p>
					<p>Review: {read.review}</p>
				</div>
			))}
		</div>
	);
}

export default ReviewDetails;
