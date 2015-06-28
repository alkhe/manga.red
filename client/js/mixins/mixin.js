export default (...mixins) => {
	let Class = function(...args) {
		for (let mixin of mixins) {
			mixin.constructor && mixin.constructor.call(this, ...args);
		}
	};
	_.assign(Class.prototype, ...mixins);
	return Class;
};
