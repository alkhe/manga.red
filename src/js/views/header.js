import React from 'react';
import { Link } from 'react-router';
import { noSelect, arrowCursor } from '../styles';

let navstyle = { ...noSelect, ...arrowCursor };

let indexLink = color => (
	<Link to='/' className={ `brand-logo ${ color }-text text-lighten-4` }>
		MangaRed
	</Link>
);

let edenLink = color => (
	<a href='http://www.mangaeden.com/' className={`${ color }-text text-lighten-2`}>
		A <span className={ `${ color }-text text-lighten-4` }>MangaEden</span> Client
	</a>
);

export default ({ color }) => (
	<div className='navbar-fixed' style={ navstyle }>
		<nav className={ color }>
			<div className='navbar-wrapper container'>
				{ indexLink(color) }
				<ul className='right'>
					<li>{ edenLink(color) }</li>
				</ul>
			</div>
		</nav>
	</div>
)
