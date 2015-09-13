import { get, set } from './persist';

import color from './actions/color';
import { COLOR } from './types';

let sideEffect = fn =>
	function(next) {
		return action => {
			fn(action);
			return next(action);
		}
	};

export default flux => {
	flux = flux.using(
		sideEffect(action => {
			if (action.type === COLOR.CONFIRM) {
				set('theme', action.color);
			}
		})
	);
	flux.dispatch(color.confirm(get('theme') || 'red'));
	return flux;
}
