import React from 'react';
import { Link } from 'react-router';
let { PureRenderMixin } = React.addons;

export default React.createClass({
	mixins: [PureRenderMixin],
	render() {
		let m = this.props.manga;
		return (
			<Link to='manga' params={{ alias: m.a }}>
				<div className='col s6'>
					<div className='card large teal z-depth-2 animated fadeIn'>
						<div className='card-image'>
							<img src={'https://cdn.mangaeden.com/mangasimg/' + m.im} />
						</div>
						<div className='card-content teal-text text-lighten-4'>
							<span className='card-title'>{m.t}</span>
							<p>Categories: {m.c.join(' ')}</p>
						</div>
					</div>
				</div>
			</Link>
		);
	}
});
