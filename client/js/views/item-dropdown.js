import React from 'react';

export default class ItemDropdown extends React.Component {
	render() {
		let { props } = this;
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
