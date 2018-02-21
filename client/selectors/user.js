// get 'user' state
export const selectUser = state => state.user;

export const selectUsername = state => state.user.username;
export const selectIsLoggedIn = state => state.user.isLoggedIn;
