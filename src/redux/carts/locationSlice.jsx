
import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    location: null,
  },
  reducers: {
    searchLocation: (state, action) => {
      state.location = action.payload;
      state.loading = false;
    },
  },
});

export const { searchLocation } = locationSlice.actions;

export default locationSlice.reducer;
