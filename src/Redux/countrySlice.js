import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  countries: [],
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchCountry = createAsyncThunk("countries/fetchAll", () => {
  return axios
    .get("https://restcountries.com/v3.1/all")
    .then((response) => response.data);
});

const countrySlice = createSlice({
  name: "country",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCountry.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCountry.fulfilled, (state, action) => {
      state.loading = false;
      state.countries = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCountry.rejected, (state, action) => {
      state.loading = false;
      state.countries = [];
      state.error = action.error.message;
    });
  },
});

export default countrySlice.reducer;
