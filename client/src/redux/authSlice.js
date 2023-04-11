import { createSlice } from "@reduxjs/toolkit";

const userAuthFromLocalStorage = () => {
  const isAuth = localStorage.getItem("isAuth");

  if (isAuth && JSON.parse(isAuth) === true) {
    return true;
  }

  return false;
};

const ssnFromLocalStorage = () => {
  return localStorage.getItem("ssn");
};

const empFromLocalStorage = () => {
  return localStorage.getItem("emp");
};

const hotelFromLocalStorage = () => {
  return localStorage.getItem("hotel");
};

const initialState = {
  isAuth: userAuthFromLocalStorage(),
  ssn: ssnFromLocalStorage(),
  emp: empFromLocalStorage(),
  hotel: hotelFromLocalStorage(),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticateUser: (state, action) => {
      const { ssn } = action.payload;
      state.isAuth = true;
      state.ssn = ssn;
      state.emp = false;
      state.hotel = null;
    },
    unauthenticateUser: (state) => {
      state.isAuth = false;
      state.ssn = null;
      state.emp = false;
            state.hotel = null;
    },
    authenticateEmp: (state, action) => {
      const { ssn,hotel } = action.payload;
      state.isAuth = true;
      state.ssn = ssn;
      state.emp = true;
      state.hotel=hotel;
    },
    unauthenticateEmp: (state) => {
      state.isAuth = false;
      state.ssn = null;
      state.emp = false;
            state.hotel = null;
    },
  },
});

export const {
  authenticateUser,
  unauthenticateUser,
  unauthenticateEmp,
  authenticateEmp,
} = authSlice.actions;

export default authSlice.reducer;
