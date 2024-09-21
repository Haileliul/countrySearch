import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./countrySlice";

const store = configureStore({
  reducer: {
    country: countryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disables the serializable state check middleware
    }),
});

export default store;
