let listenerKey = '@@symbiosis';

export default Store =>
	Component =>
		class symbiosis extends Component {
			constructor(...args) {
				super(...args);
				this.state = Store.getState();
				Store.listen(
					this[listenerKey] = () =>
						super.setState(Store.getState())
				);
			}
			componentWillUnmount() {
				if (super.componentWillUnmount) {
					super.componentWillUnmount();
				}
				Store.unlisten(this[listenerKey]);
			}
		}
