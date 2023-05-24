export const login = (token) => ({
  type: 'LOGIN',
  payload: token,
});

export const logoutAction = () => ({
  type: 'LOGOUT',
});