import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { DataContext } from '../../DataContext';

const api_key = 'AGh02pSRily04owAGvUjn2xnYdVPEayX';

function BookDetails() {
	const { updateMyReads } =  useContext(DataContext)
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

	function handleClick(isbn) {
		updateMyReads(isbn);
	}

	if (!bookDetails) {
		return <h2>Loading Book...</h2>;
	}

	return (
		<div className='details-container'>
			<div className='details-cover'>
				<img
					className='book-cover details-cover'
					src={`http://covers.openlibrary.org/b/isbn/${isbn}.jpg`} alt='book-cover'></img>
				<button id='add-book' onClick={() => handleClick(isbn)}>
					Add
				</button>
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
						ISBNS:
						{bookDetails.isbns.slice(0, 3).map((isbn) => {
							return <li>{isbn.isbn10}</li>;
						})}
					</li>
					<a
						target='_blank'
						href={`https://openlibrary.org/isbn/${bookDetails.isbns[0].isbn10}`}>
						<button id='get-book-btn'>Get Book at Open Library</button>
					</a>
				</ul>
			</div>
		</div>
	);
}

export default BookDetails;
