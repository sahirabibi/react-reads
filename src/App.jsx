import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import BestSellers from './components/BestSellers/BestSellers';
import BookDetails from './components/BookDetails/BookDetails';
import GenreList from './components/GenreList/GenreList';
import MyReads from './components/MyReads/MyReads';
import ReviewForm from './components/MyReads/ReviewForm';
import SearchResults from './components/Search/SearchResults';
import Search from './components/Header/Search';
import ReviewDetails from './components/MyReads/ReviewDetails';
import { DataContext } from './DataContext';
import { Link, Route } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

const api_key = 'AGh02pSRily04owAGvUjn2xnYdVPEayX';
// const api_key = process.env.REACT_APP_NYT_API;
const genre_api = `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${api_key}`;

function App() {
	const [genres, setGenres] = useState([]);
	const [date, setDate] = useState();
	const [myReads, setMyReads] = useState(
		JSON.parse(localStorage.getItem('myReadingData')) || []
	);
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		localStorage.setItem('myReadingData', JSON.stringify(myReads));
	}, [myReads]);

	// API call to get data array for NYT Genres on render
	useEffect(() => {
		axios
			.get(genre_api)
			.then((res) => {
				console.log(res.data.results);
				setDate(res.data.results['bestsellers_date']);
				setGenres(res.data.results.lists.splice(0, 7));
			})
			.catch((err) => console.log(err));
	}, []);
	

	// function to update MyReads()
	function updateMyReads(isbn) {
		const targetRead = `https://openlibrary.org/isbn/${isbn}.json`;
		console.log('Updating read...');
		axios
			.get(targetRead)
			.then((res) => {
				// clean up data
				let newRead = {
					title: res.data.title,
					isbn_10: res.data.isbn_10[0],
					author: res.data.authors,
					publishers: res.data.publishers,
					num_pages: res.data.number_of_pages,
					reviewTitle: '',
					review: '',
					rating: '',
				};
				setMyReads([...myReads, newRead]);
			})
			.catch((err) => console.log(err));
	}

	function updateSearchResults(searchQuery) {
		console.log('hello from updateSearch!')
		const searchURL = `http://openlibrary.org/search.json?q=${searchQuery.title}&author=${searchQuery.author}&subject=${searchQuery.subject}&isbn=${searchQuery.isbn}`;

		axios
			.get(searchURL)
			.then((res) => {
				setSearchResults([...res.data.docs.slice(0, 20)]);
			})
			.catch((err) => console.log(err));

	}

	return (
		<div className='App'>
			{/* Header provides navigation of side*/}

			{/* Pass BestSeller and Genre List Data to relevant components */}
			<DataContext.Provider
				value={{
					genres,
					setGenres,
					date,
					setDate,
					myReads,
					setMyReads,
					updateMyReads,
					searchResults,
					setSearchResults,
					updateSearchResults,
				}}>
				<Header />
				<Route exact path='/'>
					<Home />
				</Route>
				<Route exact path='/best-sellers'>
					<GenreList />
				</Route>
				<Route exact path='/best-sellers/:name'>
					<BestSellers />
				</Route>
				<Route exact path='/my-reads'>
					<MyReads />
				</Route>
				<Route exact path='/best-sellers/genre/:isbn'>
					<BookDetails />
				</Route>
				<Route exact path='/my-reads/:isbn'>
					<ReviewForm />
				</Route>
				<Route exact path='/reviews/details/:isbn'>
					<ReviewDetails />
				</Route>
			</DataContext.Provider>

			<Route exact path='/about'>
				<About />
			</Route>
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
