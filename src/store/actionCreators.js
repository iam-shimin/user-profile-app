import http, { setToken } from 'utils/http';
import { loginTypes, registerType } from './actionTypes';


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
				setToken(response.data.data.token);
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
				setToken(response.data.data.token);
				callback();
			}).catch(error => dispatch({
				type: registerType.REGISTER_FAILURE,
				payload: error
			}))
	}
}

export function getProfile() {
	return dispatch => {
		dispatch({type: 'PROFILE_FETCH_PENDING'});
		http
			.get('/user')
			.then(response => {
				console.log(response)
				dispatch({type: 'PROFILE_FETCH_SUCCESS', payload: response.data.data})
			})

	}
}