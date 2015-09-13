export let colorpicker = {
	position: 'absolute',
	background: '#222',
	top: -90,
	right: 0,
	width: 410,
	height: 90,
	padding: 5,
	// React doesn't interpret this as pixels
	lineHeight: '10px'
}

export let boxDefault = {
	width: 30,
	height: 30,
	margin: 5,
	border: '4px solid #222',
	display: 'inline-block'
}

export let boxCurrent = {
	...boxDefault,
	border: '4px solid #eee'
}

export let boxSuggested = {
	...boxDefault,
	border: '4px solid #888'
}
