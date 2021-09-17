import React from 'react';
import BestSellers from '../BestSellers/BestSellers';
import BookDetails from '../BookDetails/BookDetails';
import GenreList from '../GenreList/GenreList';
// import { DataContext } from 'DataContext';
import { Link, Route } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

function Home(props) {
    return (
			<div className='main'>
				<h2>Start Your Reading Journey Today</h2>
				<Link to='/best-sellers'><button>Best Sellers List</button></Link>
			</div>
		);
}

export default Home;