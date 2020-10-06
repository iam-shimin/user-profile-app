import {registerType, loginTypes} from './actionTypes';

const initialState = {};

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case registerType.REGISTER_SUCCESS:
			return {...state, ...action.payload.data.userData};
		case loginTypes.LOGIN_SUCCESS:
			return {...state, ...action.payload.userData}
		default:
			return state;
	}
}