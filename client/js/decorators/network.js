export default Stores =>
	Component => {
		let change = () => {};
		class Listener extends Component {
			constructor() {
				super();
				this.state = _.mapValues(Stores, s => s.getState());
				change = () => {
					this.setState(_.mapValues(Stores, s => s.getState()));
				};
			}
			componentDidMount() {
				let sfn = super.componentDidMount;
				if (sfn) {
					sfn();
				}
				_.each(Stores, s => { s.listen(change); });
			}
			componentWillUnmount() {
				let sfn = super.componentWillUnmount;
				if (sfn) {
					sfn();
				}
				_.each(Stores, s => { s.unlisten(change); });
			}
		}
		return Listener;
	}
