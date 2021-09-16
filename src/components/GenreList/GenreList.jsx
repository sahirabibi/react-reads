import React from 'react';
import BestSellers from '../BestSellers/BestSellers.jsx';
import BookDetails from '../BookDetails/BookDetails';
// import { DataContext } from '../DataContext';
import { Link, Route } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { DataContext } from '../../DataContext'

function GenreList() {
    // return a list of all genres
    // map the genres by name and store the topFive in an array (for later use)
    // set a link to bestSellers on each list item so on click can render BestSellers page
    // set id on Link using data.results.list_name
    const { genres, setGenres } = useContext(DataContext)
    // retrieve top 7 genres to display to users
    // const [genreSample, setGenreSample] = useState(genres.splice(0, 8))

    return (
			<div>
				{genres.map((genre) => (
					<Link to={`/best-sellers/${genre.list_name_encoded}`}>
						<li>{genre['display_name']}</li>
					</Link>
				))}
			</div>
		);
}

export default GenreList;