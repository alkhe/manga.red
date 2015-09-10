import React from 'react';
import { Link } from 'react-router';
import { Stores } from '../hub';
import Symbiosis from '../decorators/symbiosis';

@Symbiosis(Stores.UI)
export default class Header extends React.Component {
	render() {
		let { color } = this.state;
		return (
			<div className='navbar-fixed noselect arrow-cursor'>
				<nav className={color}>
					<div className='nav-wrapper container'>
						<Link to='main' className={`brand-logo ${color}-text text-lighten-4`}>MangaRed</Link>
						<ul className='right'>
							<li>
								<a href='http://www.mangaeden.com/' className={`${color}-text text-lighten-2`}>
									A <span className={`${color}-text text-lighten-4`}>MangaEden</span> Client
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
