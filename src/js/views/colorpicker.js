import React from 'react';
import { connect } from 'fluxette-react';
import actions from '../actions/color';
import { colorpicker as selector } from '../selectors';
import { widemargin } from '../styles';
import { colorpicker, boxDefault, boxCurrent, boxSuggested } from '../styles/colorpicker';

let colors = ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey'];

let matchToStyle = (current, actual, suggested) => {
	if (current === actual) {
		return boxCurrent;
	}
	else if (current === suggested) {
		return boxSuggested;
	}
	else {
		return boxDefault;
	}
};

let ColorPicker = ({ color, suggestion, dispatch }) => {
	let boxes = colors.map(c =>
		<div key={ c }
			onMouseOver={ () => dispatch(actions.suggest(c)) }
			onClick={
				(e) => {
					e.stopPropagation();
					dispatch(actions.confirm(c));
				}
			}
			className={ `colorbox ${ c }`}
			style={ matchToStyle(c, color, suggestion) } />
	);

	return (
		<div onMouseLeave={ () => dispatch(actions.suggest(color)) }
			style={ colorpicker }>
			{ boxes }
		</div>
	)
}

@connect(selector)
export default class extends React.Component {
	render() {
		let { enabled, color, actual } = this.state;
		let { dispatch } = this;
		return (
			<li onClick={ () => dispatch(actions.toggle()) }
				className={ `${ color }-text text-lighten-4` }>
				<i className={ `mdi-image-color-lens` } style={ widemargin }></i>
				{ enabled
					? <ColorPicker color={ actual } suggestion={ color } dispatch={ dispatch } />
					: null
				}
			</li>
		)
	}
}
