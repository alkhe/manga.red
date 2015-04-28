export default function(el, event, handler) {
	return {
		componentWillMount() {
			el.on(event, this[handler]);
		},
		componentWillUnmount() {
			el.off(event, this[handler]);
		}
	};
};
