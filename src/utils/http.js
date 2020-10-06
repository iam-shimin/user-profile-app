import axios from 'axios';

axios.defaults.baseURL = 'https://devgroceryapi.spericorn.com/api';

axios.interceptors.response.use(null, error => {
	return Promise.reject(error);
})

export function setToken(token) {
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default {
	get: axios.get,
	post: axios.post
}