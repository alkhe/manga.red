export default (el, event, handler) =>
 	Component =>
		class extends Component {
			componentWillMount() {
				if (super.componentWillMount) {
					super.componentWillMount();
				}
				el.on(event, this[handler]);
			}
			componentWillUnmount() {
				if (super.componentWillUnmount) {
					super.componentWillUnmount();
				}
				el.off(event, this[handler]);
			}
		}
