import { LOADING } from '../types';

export let start = lock => ({ type: LOADING.START, lock });
export let finish = lock => ({ type: LOADING.FINISH, lock });
