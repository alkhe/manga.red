import Leaf from 'reducer/leaf';
import { LOADING } from '../types';

export default Leaf([], {
	[LOADING.START]: (locks, { lock }) =>
		locks.indexOf(lock) === -1
			? locks.concat(lock)
			: locks,
	[LOADING.FINISH]: (locks, { lock }) => {
		let index = locks.indexOf(lock)
		return index !== -1
			? locks.splice(index, 1)
			: locks;
	}
});
