import React from 'react';
let { PureRenderMixin } = React.addons;

export default React.createClass({
	mixins: [PureRenderMixin],
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
});
