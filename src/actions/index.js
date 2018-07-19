import CHANGE_PREFERENCES from './types';

const changeUserPreference = payload => ({
  types: CHANGE_PREFERENCES,
  payload,
});

export default changeUserPreference;
