import { registerType, loginTypes, profileFetchTypes } from './actionTypes';

const initialState = {};

export default function rootReducer(state = initialState, action) {
	if (action.type.endsWith('PENDING')) {
		return {...state, appPendingState: true};
	}

	if (action.type.endsWith('FAILED')) {
		return {...state, appErrorState: action.payload, appPendingState: false}
	}

	switch (action.type) {
		case registerType.REGISTER_SUCCESS:
			return {
				...state,
				...action.payload.data.userData,
				appPendingState: false,
				appErrorState: null
			};

		case loginTypes.LOGIN_SUCCESS:
			return {
				...state,
				...action.payload.userData,
				appPendingState: false,
				appErrorState: null
			};

		case profileFetchTypes.PROFILE_FETCH_SUCCESS:
			return {
				...state,
				...action.payload.userData,
				appPendingState: false,
				appErrorState: null
			};

		default:
			return state;
	}
}