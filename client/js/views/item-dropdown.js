import React from 'react';
import Mixin from '../mixins/mixin';
let { PureRenderMixin } = React.addons;

export default class extends Mixin(React.Component, PureRenderMixin) {
	render() {
		let props = this.props;
		return (
			<li>
				<a className={`dropdown-button ${props.styles || ''}`} data-activates={props.domain}>{props.title}</a>
				<ul id={props.domain} className='dropdown-content'>
					{props.children}
				</ul>
			</li>
		);
	}
}
