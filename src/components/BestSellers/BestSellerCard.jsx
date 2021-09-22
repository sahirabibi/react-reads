import React from 'react';
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import { DataContext} from '../../DataContext';

function BestSellerCard({book}) {
	const { updateMyReads } = useContext(DataContext);
    // return a styled card using in the props obj 
   
    return (
			<Link to={`/best-sellers/genre/${book.isbns[0].isbn10}`}>
				<div className='book-container'>
					<img className='book-cover' src={book['book_image']}></img>
					<div className='book-info'>
						<h3 className='title'>{book.title}</h3>
						<h5 className='author'>{book.author}</h5>
						<p className='description'>{book.description}</p>
						{/* <button id='add-book' onClick={() => handleClick(isbn)}>
							Add
						</button>  */}
					</div>
				</div>
			</Link>
		);
}

export default BestSellerCard;