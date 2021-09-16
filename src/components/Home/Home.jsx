import React from 'react';
import BestSellers from '../BestSellers/BestSellers';
import BookDetails from '../BookDetails/BookDetails';
import GenreList from '../GenreList/GenreList';
// import { DataContext } from 'DataContext';
import { Link, Route } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

function Home(props) {
    return (
			<div>
				
				<BestSellers />
				<BookDetails />
			</div>
		);
}

export default Home;