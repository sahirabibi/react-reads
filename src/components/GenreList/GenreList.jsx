import React from 'react';
import { Link} from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../../DataContext'

function GenreList() {
    // return a list of all genres
    const { genres } = useContext(DataContext)

    return (
			<div className='genres-list'>
				<h2 className='featured-list'>Featured Lists</h2>
				{genres.map((genre) => (
					<Link
						to={`/best-sellers/${genre.list_name_encoded}`}
						key={genre['display_name']}>
						<div className='genre'>
							<li className='genre-name'>{genre['display_name']}</li>
							<div className='featured-covers'>
								{genre.books.map((bookCover) => (
									<img
										className='book-cover' id='feature-img'
										src={bookCover['book_image']}alt='book-cover'></img>
								))}
							</div>
						</div>
					</Link>
				))}
			</div>
		);
}

export default GenreList;