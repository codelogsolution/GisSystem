import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import { AUTH } from "../../services/urls";
import { LOCAL_STORAGE_TOKEN_KEY } from "../../utils/constants";

export const loginAction = createAsyncThunk(
  "auth/login",
  async (credentials) => {
    const response = await api.post(AUTH.SIGNIN, credentials);
    return response?.data;
  }
);

export const logoutAction = createAsyncThunk("auth/logout", async () => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error(error);
  }
});

// store token from API
export const setToken = async (token) => {
  await localStorage.setItem("@token_store", token);
};
