export const selectIsLoggedIn = ({ auth }) => auth.isLoggedIn;

export const selectUser = ({ auth }) => auth.user;

export const selectAuthError = ({ auth }) => auth.isAuthError;
