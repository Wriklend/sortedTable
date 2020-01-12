import {
  LOAD_PROFILES,
  LOAD_PROFILES_FAILURE,
  LOAD_PROFILES_SUCCESS,
} from '../actionsType';

function reducer(state = [], action) {
	switch (action.type) {
		case LOAD_PROFILES:
			return null;

		case LOAD_PROFILES_FAILURE:
			return null;

		case LOAD_PROFILES_SUCCESS:
			return action.payload;

		default:
			return state;
	}
}

export default reducer;