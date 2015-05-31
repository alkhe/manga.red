import React from 'react';
import Symbiosis from '../mixins/symbiosis-mixin';
import { Stores } from '../hub';
let { PureRenderMixin } = React.addons;

export default React.createClass({
	mixins: [PureRenderMixin, Symbiosis(Stores.UI)],
	render() {
		let color = this.state.color;
		let innerClass = `${this.props.loading ? 'indeterminate' : 'determinate'} ${color} lighten-4`;
		return (
			<div className={`progress ${color}`}>
				<div className={innerClass}></div>
			</div>
		);
	}
});
