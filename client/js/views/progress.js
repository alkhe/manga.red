import React from 'react';
let { PureRenderMixin } = React.addons;

export default React.createClass({
	mixins: [PureRenderMixin],
	render() {
		let innerClass = `${this.props.loading ? 'indeterminate' : 'determinate'} teal`;
		return (
			<div className='progress teal lighten-4'>
				<div className={innerClass}></div>
			</div>
		);
	}
});
