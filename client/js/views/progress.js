import React from 'react';
import Symbiosis from '../mixins/symbiosis';
import { Stores } from '../hub';
import Mixin from '../mixins/mixin';
let { PureRenderMixin } = React.addons;

@Symbiosis(Stores.UI)
export default class extends Mixin(React.Component, PureRenderMixin) {
	render() {
		let color = this.state.color;
		let innerClass = `${this.props.loading ? 'indeterminate' : 'determinate'} ${color} lighten-4`;
		return (
			<div className={`progress ${color}`}>
				<div className={innerClass}></div>
			</div>
		);
	}
}
