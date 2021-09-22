import React from 'react';
import BestSellerCard from './BestSellerCard';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { DataContext } from '../../DataContext';
import { Link } from 'react-router-dom'




function BestSellers(props) {
	// run api call based on which genre was clicked using the list_name in the url
	const { date, genres, api_key } = useContext(DataContext);
	const [bestSellers, setBestSellers] = useState();
	const { name } = useParams();
	console.log(genres)
	const currentGenre = genres.filter(genre => genre.list_name_encoded === name);
	


	// api url by genre title and date
	const bestSellersURL = `https://api.nytimes.com/svc/books/v3/lists/${date}/${name}.json?api-key=${api_key}`;

    // run api call and retrieve array of top 15 best sellers in genre
	useEffect(() => {
		axios
			.get(bestSellersURL)
			.then((res) => setBestSellers(res.data.results.books))
			.catch((err) => console.log(err));
	}, []);

    if (!bestSellers) {
        return <h2>Loading Data...</h2>
    }

	return (
		<div>
			<h2>Best Sellers in {currentGenre[0].list_name} </h2>
			<div className='best-sellers'>
				{bestSellers.map((book) => (
					<li>
						<BestSellerCard book={book}></BestSellerCard>
					</li>
				))}
			</div>
		</div>
	);
}

export default BestSellers;
