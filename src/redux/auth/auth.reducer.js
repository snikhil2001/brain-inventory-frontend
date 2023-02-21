import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.types";

let token = localStorage.getItem("token");

const initialState = {
  isAuth: !!token,
  token: token,
  loading: false,
  error: false,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: false };

    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload);
      return { ...state, token: payload, error: false, loading: false };

    case LOGIN_ERROR:
      return { ...state, error: true, loading: false };

    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        token: null,
        error: false,
        loading: false,
      };

    default:
      return state;
  }
};
