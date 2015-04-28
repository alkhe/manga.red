import React from 'react';
let { PureRenderMixin } = React.addons;

export default React.createClass({
	mixins: [PureRenderMixin],
	render() {
		let innerClass = `${this.props.loading ? 'indeterminate' : 'determinate'} teal lighten-4`;
		return (
			<div className='progress teal'>
				<div className={innerClass}></div>
			</div>
		);
	}
});
