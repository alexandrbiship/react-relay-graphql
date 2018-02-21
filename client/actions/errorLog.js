import * as C from 'client/constants';

export const consoleErr = errorLog =>
  ({type: C.ERROR_MESSAGE, errorLog});
