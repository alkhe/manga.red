import alt from '../alt';
import reqwest from 'reqwest';
import MangaIndexStore from '../stores/manga-index-store';

class MangaDetailActions {
	getManga(alias) {
		let manga = _.find(MangaIndexStore.getState().all, _.matchesProperty('a', alias));
		reqwest({
			url: `https://www.mangaeden.com/api/manga/${manga.i}`,
			crossOrigin: true,
			success: this.actions.getMangaComplete
		});
	}
	getMangaComplete(res) {
		this.dispatch(res);
	}
}

export default alt.createActions(MangaDetailActions);
