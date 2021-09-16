import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import BestSellers from './components/BestSellers/BestSellers';
import BookDetails from './components/BookDetails/BookDetails';
import GenreList from './components/GenreList/GenreList';
import { DataContext } from './DataContext';
import { Link, Route } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const api_key = 'AGh02pSRily04owAGvUjn2xnYdVPEayX';
const genre_api = `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${api_key}`;

function App() {
	const [genres, setGenres] = useState([]);
	const [date, setDate] = useState();

	// API call to get data array for NYT Genres on render
	useEffect(() => {
		axios
			.get(genre_api)
			.then((res) => {
				console.log(res.data.results);
				setDate(res.data.results['bestsellers_date'])
				setGenres(res.data.results.lists.splice(0, 7));
			})
			.catch((err) => console.log(err));
	}, []);

	// API call to get data for NYT BestSellers

	useEffect(() => {
		axios.get().then().catch(err => console.log(err))
	})

	return (
		<div className='App'>
			{/* Header provides navigation of side*/}
			<Header />
			{/* Pass BestSeller and Genre List Data to relevant components */}
			<DataContext.Provider
				value={{ genres, setGenres, date, setDate }}>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/best-sellers'>
					<GenreList />
				</Route>
				<Route exact path='/best-sellers/:name'>
					<BestSellers/>
				</Route>
			</DataContext.Provider>
			<About/>
		</div>
	);
}

export default App;

// IN App.js
// import Header/ Home / About
// import BestSellers, GenreList
// import Book Details
// install axios and run an api call
// create state variables in App.js -> Genres, setGenres
// create state variables for BestSellers -> bestSeller, setBestSeller
// use axios to send API call to NYT names API in order to get list of all genre names
// share data with GenreList, BestSellers, BookDetails via context

// IN GENRE LIST
// import Best Sellers
// run API call to NYT API by genre-list
// create Books, setBooks to store all the relevant Books
// on click of genre, user should be taken to the relevant Book section
// IN BESTSELLERS
// create state var [BestSellers, setBestSellers]
// run an api call using the name provided by the URL
// use useParams() to extract name and pass it inside API call
// display each book as a card on the page users can scroll through
// pass data to BestSellerCard
// each card should display an image of the book cover, author, rank
// In Book Details
// need bestSellers data, deconstruct from props via isbn
// run another call to the API using the isbn number
// state variables, book, setBook
// state variable, review, setReview
// set results of API call to book and review
// display book cover, summary, isbn,
// display link to book review IF present
