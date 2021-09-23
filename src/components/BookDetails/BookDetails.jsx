import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { DataContext } from '../../DataContext';

function BookDetails() {
	const { updateMyReads, api_key, error, setError } = useContext(DataContext);
	const { isbn } = useParams();
	const [bookDetails, setBookDetails] = useState();
	const [bookKey, setKey] = useState();
	const [bookDescription, setBookDescription] = useState();

	const bookURL = `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?isbn=${isbn}&api-key=${api_key}`;

	useEffect(() => {
		// get book details from NYT
		axios
			.get(bookURL)
			.then((res) => {
				setBookDetails(res.data.results[0]);
			})
			.catch((err) => setError([...error, err]));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		// get advanced details from Open Library
		axios
			.get(`https://openlibrary.org/isbn/${isbn}.json`)
			.then((res) => {
				setKey(res.data.works[0].key);
			})
			.catch((err) => setError([...error, err]));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		// get books detailed description if available at open library
		axios
			.get(`https://openlibrary.org${bookKey}.json`)
			.then((res) => {
				setBookDescription([res.data.description.value]);
			})
			.catch((err) => console.log(err));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [bookKey]);

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
					src={`https://covers.openlibrary.org/b/isbn/${isbn}.jpg`}
					alt='book-cover'></img>
				<button id='add-book' onClick={() => handleClick(isbn)}>
					Add
				</button>
			</div>
			<div className='details'>
				<h2>Rank: {bookDetails['ranks_history'][0].rank}</h2>
				<h3>{bookDetails['title']}</h3>
				<h4>{bookDetails.author}</h4>
				<p>
					{bookDescription ? (
						<p>{bookDescription}</p>
					) : (
						bookDetails['description']
					)}
				</p>
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
						<ul>
							{bookDetails.isbns.slice(0, 3).map((isbn) => {
								return <li>{isbn.isbn10}</li>;
							})}
						</ul>
					</li>
					<a
						target='_blank'
						rel='noopener noreferrer'
						href={`https://openlibrary.org/isbn/${bookDetails.isbns[0].isbn10}`}>
						<button id='get-book-btn'>Get Book at Open Library</button>
					</a>
				</ul>
			</div>
		</div>
	);
}

export default BookDetails;
