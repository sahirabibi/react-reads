import React from 'react';
import BestSellers from '../BestSellers/BestSellers';
import BookDetails from '../BookDetails/BookDetails';
import GenreList from '../GenreList/GenreList';
// import { DataContext } from 'DataContext';
import { Link, Route } from 'react-router-dom';
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
					<img className='display-book' id={`book-${idx}`} src={book}></img>
				))}
			</div>
		</div>
	);
}

export default Home;
