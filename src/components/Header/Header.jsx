import React from 'react';
import {Link} from 'react-router-dom'

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
							<li>Best Sellers</li>
						</Link>
						<Link to='/about'>
							<li>About</li>
						</Link>
					</ul>
				</nav>
			</header>
		);
}

export default Header;