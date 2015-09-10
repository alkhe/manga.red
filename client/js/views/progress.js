import React from 'react';
import Symbiosis from '../decorators/symbiosis';
import { Stores } from '../hub';

@Symbiosis(Stores.UI)
export default class extends React.Component {
	render() {
		let { color } = this.state;
		let innerClass = `${this.props.loading ? 'indeterminate' : 'determinate'} ${color} lighten-4`;
		return (
			<div className={`progress ${color}`}>
				<div className={innerClass}></div>
			</div>
		);
	}
}
