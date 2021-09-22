import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../../DataContext';

function Home(props) {
	const [display, setDisplay] = useState([]);
	const { genres } = useContext(DataContext);

	useEffect(() => {
		// add all book image nested inside of genres to display
		let newDisplay = genres.map((genre) => genre.books)
		// iterate over newDisplay arr and extract all urls for book covers and setDisplay
		let bookURLS = [];
		for (let i = 0; i < newDisplay.length; i++) {
			for (let j = 0; j < newDisplay[i].length; j++) {
				bookURLS.push(newDisplay[i][j]['book_image'])
			}
		}
		setDisplay([display, ...bookURLS]);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [genres]);


	return (
		<div className='main'>
			<div className='main-tag'>
				<h2>Start Your Reading Journey Today</h2>
				<Link to='/best-sellers'>
					<button>Best Sellers List</button>
				</Link>
			</div>

			<div className='display'>
				{display.splice(15, 19).map((book, idx) => (
					<img alt='book-covers' className='display-book' id={`book-${idx}`} src={book} key={idx}></img>
				))}
			</div>
		</div>
	);
}

export default Home;
