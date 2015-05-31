import React from 'react';
import { Link } from 'react-router';
import { Stores } from '../hub';
import Symbiosis from '../mixins/symbiosis-mixin';
let { PureRenderMixin } = React.addons;

export default React.createClass({
	mixins: [PureRenderMixin, Symbiosis(Stores.UI)],
	render() {
		let color = this.state.color;
		let m = this.props.manga;
		return (
			<Link to='manga' params={{ alias: m.a }}>
				<div className='col l3 m4 s6'>
					<div className={`card large ${color} z-depth-2 animated fadeIn`}>
						<div className='card-image'>
							<img src={'https://cdn.mangaeden.com/mangasimg/' + m.im} />
						</div>
						<div className={`card-content ${color}-text text-lighten-4`}>
							<span className='card-title truncate'>{m.t}</span>
							<p>Categories: {m.c.join(' ')}</p>
						</div>
					</div>
				</div>
			</Link>
		);
	}
});
