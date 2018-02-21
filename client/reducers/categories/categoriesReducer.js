import { LOAD_CATEGORIES, CLEAR_CATEGORIES } from 'client/constants';

const categories = (state = [], action) => {
  switch (action.type) {
    case LOAD_CATEGORIES:
      return action.categories;
    case CLEAR_CATEGORIES:
      return [];
    default:
      return state;
  }
};

export default categories;
