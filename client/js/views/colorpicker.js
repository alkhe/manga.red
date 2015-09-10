import React from 'react';
import { Actions, Stores } from '../hub';
import Symbiosis from '../decorators/symbiosis';

let colors = ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey'];

@Symbiosis(Stores.UI)
export default class ColorPicker extends React.Component {
	static getStores() {
		return [Stores.UI];
	}
	static getPropsFromStores() {
		return Stores.UI.getState();
	}
	changeColor(e, el, c) {
		Actions.UI.changeThemeColor({ color: c, confirm: false });
	}
	changeColorConfirm(e, el, c) {
		e.stopPropagation();
		Actions.UI.changeThemeColor({ color: c, confirm: true });
	}
	componentDidMount() {

	}
	render() {
		let { props, state } = this;
		let colorboxes = colors.map(c =>
			<div onMouseOver={_.partialRight(::this.changeColor, c)}
				onClick={_.partialRight(::this.changeColorConfirm, c)}
				key={c}
				className={`colorbox ${c} ${c == state.actualcolor ? 'current' : (c == state.color ? 'selected' : '')}`}>
			</div>
		);
		return (
			<div onMouseLeave={_.partialRight(::this.changeColor, state.actualcolor)}
				className={`colorpicker ${props.hidden ? 'hide' : ''}`}>
				{colorboxes}
			</div>
		);
	}
}
