import React from 'react';

export default Component =>
	class History extends Component {
		static contextTypes = {
			...Component.contextTypes,
			history: React.PropTypes.any.isRequired
		}
		constructor(...args) {
			super(...args);
			this.history = this.context.history;
		}
	}
