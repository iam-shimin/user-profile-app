const LOGIN_PENDING = 'LOGIN_PENDING';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILED = 'LOGIN_FAILED';

const REGISTER_PENDING = 'REGISTER_PENDING';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAILURE = 'REGISTER_FAILURE';

const PROFILE_FETCH_PENDING = 'PROFILE_FETCH_PENDING';
const PROFILE_FETCH_SUCCESS = 'PROFILE_FETCH_SUCCESS';
const PROFILE_FETCH_FAILURE = 'PROFILE_FETCH_FAILURE';

export const loginTypes = {
	LOGIN_PENDING,
	LOGIN_SUCCESS,
	LOGIN_FAILED
}

export const registerType = {
	REGISTER_PENDING,
	REGISTER_SUCCESS,
	REGISTER_FAILURE
}

export const profileFetchTypes = {
	PROFILE_FETCH_PENDING,
	PROFILE_FETCH_SUCCESS,
	PROFILE_FETCH_FAILURE
}