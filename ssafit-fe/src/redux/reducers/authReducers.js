const initialState = {
  jwt: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, jwt: action.payload };
    case 'LOGOUT':
      return { ...state, jwt: null };
    default:
      return state;
  }
}

export default authReducer;