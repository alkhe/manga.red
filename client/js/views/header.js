import React from 'react';
import { Link } from 'react-router';
import { Stores } from '../hub';
import Symbiosis from '../mixins/symbiosis-mixin';

export default React.createClass({
	mixins: [Symbiosis(Stores.UI)],
	render() {
		let color = this.state.color;
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
});
