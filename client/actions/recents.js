import * as C from 'client/constants';

export const loadRecents = recents => 
  ({type: C.LOAD_RECENTS, recents});

export const clearRecents = () => 
  ({type: C.CLEAR_RECENTS});
