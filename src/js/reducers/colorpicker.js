import Leaf from 'reducer/leaf';
import { COLOR } from '../types';

export default Leaf({ actual: 'red', color: 'red', enabled: false }, {
	[COLOR.TOGGLE]: state => ({ ...state, enabled: !state.enabled }),
	[COLOR.SUGGEST]: (state, { color }) => ({ ...state, color }),
	[COLOR.CONFIRM]: (state, { color }) => ({ actual: color, color })
});
