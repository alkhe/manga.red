import { COLOR } from '../types';

export default {
	toggle: () => ({ type: COLOR.TOGGLE }),
	suggest: color => ({ color, type: COLOR.SUGGEST }),
	confirm: color => ({ color, type: COLOR.CONFIRM })
}
