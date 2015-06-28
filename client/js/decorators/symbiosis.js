export default Store =>
	Component => {
		let change = () => {};
		class Listener extends Component {
			constructor() {
				super();
				this.state = Store.getState();
				change = () => {
					this.setState(Store.getState());
				};
			}
			componentDidMount() {
				let sfn = super.componentDidMount;
				if (sfn) {
					sfn();
				}
				Store.listen(change);
			}
			componentWillUnmount() {
				let sfn = super.componentWillUnmount;
				if (sfn) {
					sfn();
				}
				Store.unlisten(change);
			}
		}
		return Listener;
	}
