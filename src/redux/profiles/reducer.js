import {
  LOAD_PROFILES,
  LOAD_PROFILES_FAILURE,
	LOAD_PROFILES_SUCCESS,
	SORT_PROFILES,
} from '../actionsType';

function reducer(state = [], action) {
	switch (action.type) {
		case LOAD_PROFILES:
			return state;

		case LOAD_PROFILES_FAILURE:
			return state;

		case LOAD_PROFILES_SUCCESS:
			return {profiles: action.payload};

			
		case SORT_PROFILES:
			return {profiles: ['name']};
		// case SORT_PROFILES:
		// 	return {profiles: state.profiles.sort((a, b) => {
		// 		if (a[action.payload] > b[action.payload]) return 1;
		// 		if (a[action.payload] === b[action.payload]) return 0;
		// 		if (a[action.payload] < b[action.payload]) return -1;
		// 	})};

		default:
			return state;
	}
}

export default reducer;