export default {
	Before: 0,
	Waiting: 1,
	Ready: 2,
	Working: 3,
	Done: 4,
	Loading(n) {
		return (n > 0) && (n < 4);
	}
};
