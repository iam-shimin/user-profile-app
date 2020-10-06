import axios from 'axios';

axios.defaults.baseURL = 'https://devgroceryapi.spericorn.com/api';

export function setToken(token) {
	axios.defaults.headers.common['Authorisation'] = token;
}

export default {
	get: axios.get,
	post: axios.post
}