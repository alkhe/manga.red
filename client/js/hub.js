import MangaAPI from './actions/manga-api-actions';
import MangaUI from './actions/manga-ui-actions';

import MangaIndex from './stores/manga-index-store';
import MangaTitle from './stores/manga-title-store';
import MangaChapter from './stores/manga-chapter-store';
import UI from './stores/ui-store';

export const Actions = { MangaAPI, MangaUI };
export const Stores = { MangaIndex, MangaTitle, MangaChapter, UI };
