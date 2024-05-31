import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./carts/weatherSlice";
import locationReducer from "./carts/locationSlice";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    location: locationReducer,
  },
});

export default store;
