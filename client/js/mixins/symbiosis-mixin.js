const onChange = '__onChange';

export default function(Store) {
	return {
		getInitialState() {
			return Store.getState();
		},
		componentWillMount() {
			Store.listen(this[onChange]);
		},
		componentWillUnmount() {
			Store.unlisten(this[onChange]);
		},
		[onChange]() {
			this.setState(Store.getState());
		}
	};
};
