import {
  ERROR_MESSAGE,
} from 'client/constants';

const defaultError = { errorLog: '' };

const errorLog = (state = defaultError, action) => {
  switch (action.type) {
    case ERROR_MESSAGE:
      return action.errorLog;
    default:
      return state;
  }
};

export default errorLog;
