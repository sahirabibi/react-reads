import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { DataContext } from '../../DataContext';

function Bookmarks(props) {
	const { isbn } = useParams();
	const { myReads, setMyReads } = useContext(DataContext);

	const [currentBook, setCurrentBook] = useState();
	const [bookmark, setBookmark] = useState({
		isbn: isbn,
		currentProgress: '',
		currentThoughts: '',
	});

	useEffect(() => {
		let targetRead = myReads.filter((read) => read.isbn_10 === isbn);
		setCurrentBook([...targetRead]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function handleSubmit(event) {
		event.preventDefault();
		let tempReads = [...myReads];
		let index = tempReads.findIndex((read) => read.isbn_10 === isbn);
		tempReads[index].bookmarks.unshift(bookmark)
		setMyReads([...tempReads]);
	}

	function handleChange(event) {
		setBookmark({ ...bookmark, [event.target.id]: event.target.value });
	}

	if (!currentBook) {
		return <h2>Loading Bookmarks...</h2>;
	}

	return (
		<div>
			<h2>{currentBook[0].title}</h2>
			<form className='review-form bookmark-form' onSubmit={handleSubmit}>
				<div classname='progress'>
					<label htmlFor='current-progress'>Pages Read:</label>
					<input
						type='number'
						id='currentProgress'
						onChange={handleChange}
						step='1'
					/>{' '}
					/ {currentBook[0].num_pages} pages
				</div>
				<label htmlFor='review'>Current Thoughts</label>
				<textarea
					class='longInput'
					cols='30'
					rows='10'
					type='text'
					id='currentThoughts'
					onChange={handleChange}></textarea>
				<button className='review-btn'>Submit</button>
			</form>
			<div className='all-bookmarks'>
				{currentBook[0].bookmarks ? (
					currentBook[0].bookmarks.map((bookmark, id) => {
						return (
							<div className='bookmark-details' id={id} key={id}>
								<p>
									<strong>Progress Point:</strong> Page{' '}
									{bookmark.currentProgress}{' '}
								</p>
								<p>
									<strong>Current Thoughts:</strong> {bookmark.currentThoughts}
								</p>
							</div>
						);
					})
				) : (
					<h3>Add Bookmarks to view them here...</h3>
				)}
			</div>
		</div>
	);
}

export default Bookmarks;
