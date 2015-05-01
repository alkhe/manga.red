import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	render() {
		return (
			<div className='navbar-fixed'>
				<nav className='teal'>
					<div className='nav-wrapper container'>
						<Link to='main' className='brand-logo teal-text text-lighten-4'>Manga.IO</Link>
						<ul className='right'>
							<li>
								<a href='http://www.mangaeden.com/' className='teal-text text-lighten-2'>
									A <span className='teal-text text-lighten-4'>MangaEden</span> Client
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
});
