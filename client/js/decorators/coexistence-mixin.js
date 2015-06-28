const onChange = '__onChange';

export default function(Stores) {
	return {
		getInitialState() {
			return _.reduce(Stores.map(s => s.getState()), _.merge, {});
		},
		componentWillMount() {
			_.each(Stores, s => s.listen(this[onChange]));
		},
		componentWillUnmount() {
			_.each(Stores, s => s.unlisten(this[onChange]));
		},
		[onChange]() {
			this.setState(_.merge(Stores.map(s => s.getState())));
		}
	};
};
