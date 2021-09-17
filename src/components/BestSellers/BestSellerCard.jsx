import React from 'react';
import {Link} from 'react-router-dom'

function BestSellerCard({book}) {
    // return a styled card using in the props obj 
    // Link to BookDetails attached on this card so on click can render book details page
    return (
			<Link to={`/best-sellers/genre/${book.isbns[0].isbn10}`}>
				<div className='book-container'>
					<img className='book-cover' src={book['book_image']}></img>
					<div className='book-info'>
						<h3 className='title'>{book.title}</h3>
						<h5>{book.author}</h5>
						<p>{book.description}</p>
					</div>
				</div>
			</Link>
		);
}

export default BestSellerCard;