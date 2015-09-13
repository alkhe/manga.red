import React from 'react';
import { connect } from 'fluxette-react';
import { index, title, chapter } from '../actions/manga';

let plural = n => n == 1 ? '' : 's';

@connect()
export default class extends React.Component {
	componentWillMount() {
		let p = this.dispatch(chapter('naruto', 700.2))[0];
		p.then(::console.log);
	}
	render() {
		return null;
	}
}
