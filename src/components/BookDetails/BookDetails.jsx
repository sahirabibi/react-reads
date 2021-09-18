import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const api_key = 'AGh02pSRily04owAGvUjn2xnYdVPEayX';

function BookDetails() {
	const { isbn } = useParams();
	const [bookDetails, setBookDetails] = useState();
	const [review, setReview] = useState();

	const bookURL = `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?isbn=${isbn}&api-key=${api_key}`;

	useEffect(() => {
		axios
			.get(bookURL)
			.then((res) => {
				setBookDetails(res.data.results[0]);
			})
			.catch((err) => console.log(err));
	}, []);

	if (!bookDetails) {
		return <h2>Loading Book...</h2>;
	}

	return (
		<div className='details-container'>
			<div className='details-cover'>
				<img className='book-cover details-cover' src={`http://covers.openlibrary.org/b/isbn/${isbn}.jpg`}></img>
			</div>
			<div className='details'>
				<h2>Rank: {bookDetails['ranks_history'][0].rank}</h2>
				<h3>{bookDetails['title']}</h3>
				<h4>{bookDetails.author}</h4>
				<p>{bookDetails['description']}</p>
				<ul>
					<li>
						Weeks On List: {bookDetails['ranks_history'][0]['weeks_on_list']}
					</li>
					<li>
						Rank Last Week: {bookDetails['ranks_history'][0]['rank_last_week']}
					</li>
					<li>Publisher: {bookDetails.publisher}</li>
					<li>
						ISBNS:{' '}
						{bookDetails.isbns.splice(0, 3).map((isbn) => {
							return <li>{isbn.isbn10}</li>;
						})}
					</li>
				</ul>
			</div>
		</div>
	);
}

export default BookDetails;
