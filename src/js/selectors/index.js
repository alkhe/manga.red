import { select } from 'fluxette-react';

export let colorpicker = select(
	state => state.colorpicker,
	state => state
)
