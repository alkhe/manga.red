import Cookie from 'js-cookie';

export let get = key => {
	return Cookie.get(key) || localStorage.getItem(key);
}

export let set = (key, value) => {
	Cookie.set(key, value);
	localStorage.setItem(key, value);
}
