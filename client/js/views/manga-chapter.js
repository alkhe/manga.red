import React from 'react';
import MangaChapterStore from '../stores/manga-chaper-store';
import Symbiosis from '../mixins/symbiosis-mixin';

export default React.createClass({
	mixins: [Symbiosis(MangaChapterStore)],
	render() {
		return ();
	}
});
