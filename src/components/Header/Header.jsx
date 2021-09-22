import React from 'react';
import {Link, Route} from 'react-router-dom'
import SearchResults from '../Search/SearchResults';
import Search from './Search';

function Header(props) {

    return (
			<header>
				<h1>Reads</h1>

				<nav>
					<ul>
						<Link to='/'>
							<li>Home</li>
						</Link>
						<Link to='/best-sellers'>
							<li>Featured List</li>
						</Link>
						<Link to='/my-reads'>
							<li>My Reads</li>
						</Link>
						<Link to='/about'>
							<li>About</li>
						</Link>
					</ul>
					<Search />
				</nav>
			</header>
		);
}

export default Header;