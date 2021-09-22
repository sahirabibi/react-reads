import React from 'react';
import { Link } from 'react-router-dom'

import Search from './Search';

function Header(props) {

    return (
			<div className='main-header'>
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
					</nav>
				</header>
				<Search />
			</div>
		);
}

export default Header;