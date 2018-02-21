import {
  LOAD_RECENTS,
  CLEAR_RECENTS,
} from 'client/constants';

const recents = (state = [], action) => {
  switch (action.type) {
    case LOAD_RECENTS:
      return action.recents;
    case CLEAR_RECENTS:
      return [];
    default:
      return state;
  }
};

export default recents;
