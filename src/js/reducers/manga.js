import Shape from 'reducer/shape';
import Leaf from 'reducer/leaf';
import { MANGA } from '../types';

let index = Leaf([], {
	[MANGA.INDEX.REQUEST]: () => [],
	[MANGA.INDEX.SUCCESS]: (state, { list }) => list
});

let title = Leaf(null, {
	[MANGA.TITLE.REQUEST]: () => null,
	[MANGA.TITLE.SUCCESS]: (state, title) => title
});

let chapter = Leaf([], {
	[MANGA.CHAPTER.REQUEST]: () => [],
	[MANGA.CHAPTER.SUCCESS]: (state, chapter) => chapter
});

export default Shape({ index, title, chapter });
