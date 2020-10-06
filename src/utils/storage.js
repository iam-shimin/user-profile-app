const sessionkey = 'key';

export function isTokenAvailable() {
	return !!localStorage.getItem(sessionkey);
}

export function updateToken() {
	localStorage.setItem(sessionkey);
}

export function clearToken() {
	localStorage.removeItem(sessionkey);
}