const onChange = '__onChange';

export default function(Network) {
	return {
		getInitialState() {
			return _.mapValues(Network, s => s.getState());
		},
		componentWillMount() {
			_.each(Network, s => s.listen(this[onChange]));
		},
		componentWillUnmount() {
			_.each(Network, s => s.unlisten(this[onChange]));
		},
		[onChange]() {
			this.setState(_.mapValues(Network, s => s.getState()));
		}
	};
};
