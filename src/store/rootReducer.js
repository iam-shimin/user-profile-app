import {registerType} from './actionTypes';

const initialState = {};

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case registerType.REGISTER_SUCCESS:
			return {...state, ...action.payload.data.userData}
		default:
			return state;
	}
}