export const login = (id, token) => ({
  type: "LOGIN",
  payload: {
    id,
    token
  }
});

export const logoutAction = () => ({
  type: 'LOGOUT',
});