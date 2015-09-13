import React from 'react';
import { connect } from 'fluxette-react';
import { colorpicker as selector } from './selectors';
import Header from './views/header';
import Footer from './views/footer';
import Colorpicker from './views/colorpicker';

@connect(selector)
export default class extends React.Component {
	render() {
		let { color } = this.state;
		return (
			<div>
				<Header color={ color } />
				{ this.props.children }
				<Footer color={ color } right={ <Colorpicker color={ color } dispatch={ this.dispatch } /> }/>
			</div>
		);
	}
};
