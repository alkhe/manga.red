let listenerKey = '@@network';

export default Stores =>
	Component =>
		class Network extends Component {
			constructor(...args) {
				super(...args);
				this.state = _.mapValues(Stores, s => s.getState());
				this[listenerKey] = () =>
					super.setState(_.mapValues(Stores, s => s.getState()));
				_.each(Stores, s => s.listen(this[listenerKey]));
			}
			componentWillUnmount() {
				if (super.componentWillUnmount) {
					super.componentWillUnmount();
				}
				_.each(Stores, s => s.unlisten(this[listenerKey]));
			}
		};
