import http, { setToken } from 'utils/http';
import { loginTypes, registerType } from './actionTypes';
import { updateToken, clearToken } from 'utils/storage';
// import history from 'utils/history';


export function login(userCredentials, callback) {
	return dispatch => {
		dispatch({type: loginTypes.LOGIN_PENDING});
		http
			.post('/auth/login', userCredentials)
			.then(response => {
				dispatch({
					type: loginTypes.LOGIN_SUCCESS,
					payload: response.data.data
				});
				callback();
			})
			.catch(error => dispatch({
				type: loginTypes.LOGIN_FAILED,
				payload: error
			}))
	}
}

export function register(userData, callback) {
	return dispatch => {
		dispatch({type: registerType.REGISTER_PENDING});
		http
			.post('/auth/register', userData)
			.then(response => {
				dispatch({ type: registerType.REGISTER_SUCCESS, payload: response.data });
				updateToken(response.data.data.token);
				setToken(response.data.data.token);
				callback();
			}).catch(error => dispatch({
				type: registerType.REGISTER_FAILURE,
				payload: error
			}))
	}
}

export function logout() {
	return dispatch => {
		dispatch({type: 'LOGOUT'});
		clearToken();
		document.location = '/';
	}
}

export function getProfile() {
	return dispatch => {
		dispatch({type: 'PROFILE_FETCH_PENDING'});
		http.get('/user', {
			headers: 'session'
		})
	}
}