import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { DataContext } from '../../DataContext';
import axios from 'axios';
import { Route} from 'react-router-dom'

function MyReads(props) {
	// when add button is clicked, book should be added to a state component that should be updated and sent down and rendered
	const { myReads } = useContext(DataContext);
	const isbn = '' // filter books for specific book 

	// grab cover using isbn data
	useEffect(() => {
		axios()
			.then((res) => res.data)
			.catch((err) => console.log(err));
	}, []);

	// list author /
	// const authorAPI : https://openlibrary.org/authors/OL23919A.json
    // const coverAPI:

	if (!myReads) {
		return <h5>Add books to your Reads list to get started!</h5>;
	}

	return (
		<div className='tbr-title'>
			<h2>My Reads</h2>
			{myReads.map((read) => {
				return (
					<ul className='my-reads-list'>
						<Link key={read.isbn_10[0]} to={`/my-reads/${read.isbn_10[0]}`}>
							<li className='tbr-title'>{read.title}</li>
							<li>{read.author}</li>
						</Link>
					</ul>
				);
			})}
		</div>
	);
}

export default MyReads;
