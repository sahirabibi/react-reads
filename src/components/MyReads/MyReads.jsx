import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DataContext } from '../../DataContext';

function MyReads(props) {
	// when add button is clicked, book should be added to a state component that should be updated and sent down and rendered
	const { myReads, setMyReads } = useContext(DataContext);

	function updateProgress(isbn) {
		// update reading progress
		let tempReads = [...myReads];
		let index = tempReads.findIndex((read) => read.isbn_10 === isbn);
		tempReads[index].inProgress = !tempReads[index].inProgress;
		setMyReads([...tempReads]);
	}

	function deleteRead(index) {
		let tempReads = [...myReads];
		tempReads.splice(index, 1)
		setMyReads([...tempReads])
	}

	if (myReads.length < 1) {
		return <h2>Add books to your Reads list to get started!</h2>;
	}

	return (
		<div className='tbr-item'>
			<h2>My Reads and Reviews</h2>
			{myReads.map((read, index) => {
				return (
					<div className='my-reads-list' key={index}>
						<img
							id='my-reads-cover'
							src={`http://covers.openlibrary.org/b/isbn/${read.isbn_10}.jpg`}
							alt='book-cover'
						/>
						{read.inProgress ? (
							<button
								onClick={() => updateProgress(read.isbn_10)}
								id='inProgress'>
								In Progress
							</button>
						) : (
							<button
								onClick={() => updateProgress(read.isbn_10)}
								id='completed'>
								Completed
							</button>
						)}
						<div className='reads-container'>
							<p className='tbr-title'>
								<strong>{read.title}</strong>
							</p>
							<p>Page Count: {read.num_pages}</p>
							{read.rating ? (
								<div>
									<strong>Rating:</strong> {read.rating}
								</div>
							) : (
								''
							)}
							{read.review ? (
								<div>
									<strong>Review Snippet:</strong>{' '}
									{read.review.substring(0, 150)}{' '}
								</div>
							) : (
								''
							)}
							{read.review ? (
								<div>
									<Link to={`/my-reads/${read.isbn_10}`}>
										<button id='edit-btn' className='review-btn'>
											Edit
										</button>
									</Link>
									<Link to={`/reviews/details/${read.isbn_10}`}>
										<button className='review-btn'>See Review</button>
									</Link>
								</div>
							) : (
								<Link to={`/my-reads/${read.isbn_10}`}>
									<button className='review-btn'>Add Review</button>
								</Link>
							)}
							<button id='delete' onClick={() => deleteRead(index)}>Delete</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default MyReads;
