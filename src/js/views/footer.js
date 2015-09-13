import React from 'react';
import { Link } from 'react-router';
import history from '../decorators/history';
import { noSelect, arrowCursor, fixedBottom } from '../styles';

let navstyle = { ...noSelect, ...arrowCursor, ...fixedBottom };

let navPiece = (name, content) => (
	<ul className={ name }>
		{ content }
	</ul>
);

@history
export default class extends React.Component {
	render() {
		let { color, left, right } = this.props;
		return (
			<div className='navbar-fixed' style={ navstyle }>
				<nav className={ `${ color } z-depth-0` }>
					<div className='nav-wrapper container'>
						{ navPiece('left', left) }
						{ navPiece('right', right) }
					</div>
				</nav>
			</div>
		);
	}
}
