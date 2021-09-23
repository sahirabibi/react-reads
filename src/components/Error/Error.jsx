import React from 'react';
import { useContext } from 'react';
import { DataContext } from '../../DataContext';
import { useHistory } from 'react-router-dom';

function Error(props) {
	const history = useHistory();
	// display error to user
	const { error, setError } = useContext(DataContext);

	function removeError() {
		setError([]);
		history.push('/');
	}

	return (
		<div className='error-container'>
			{error.map((error) => {
				return (
					<div className='error-msg'>
						<li>{error}</li>
					</div>
				);
			})}
			<button onClick={removeError}>Exit</button>
		</div>
	);
}

export default Error;
