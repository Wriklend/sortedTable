import {
  LOAD_PROFILES,
  LOAD_PROFILES_FAILURE,
  LOAD_PROFILES_SUCCESS,
} from '../actionsType';

import { getProfiles } from '../../services/requestMock';

export const loadProfilesAction = {
	type: LOAD_PROFILES,
};

export const loadProfilesFailure = {
	type: LOAD_PROFILES_FAILURE,
};

export const loadProfilesSuccess = payload => ({
	type: LOAD_PROFILES_SUCCESS,
	payload,
});

export function loadProfiles() {
  return dispatch => {
    dispatch(loadProfilesAction);
    return getProfiles()
      .then(
        r => dispatch(loadProfilesSuccess(r)), 
        err => dispatch(loadProfilesFailure(err))
        );
  }
}
