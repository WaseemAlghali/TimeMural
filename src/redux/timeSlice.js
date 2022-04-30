import { createSlice } from "@reduxjs/toolkit";

export const timeSlice = createSlice({
  name: "time",
  initialState: {
    second: 0,
    minute: 0,
    hour: 0,
  },
  reducers: {
    setSecond: (state, action) => {
      state.second = action.payload;
    },
    deSecond: (state) => {
      state.second = state.second - 1;
    },
    inSecond: (state) => {
      state.second = state.second + 1;
    },
    setMinute: (state, action) => {
      state.minute = action.payload;
    },
    setHour: (state, action) => {
      state.hours = action.payload;
    },
  },
});

export const { setSecond, setMinute, setHour, inSecond, deSecond } =
  timeSlice.actions;

export default timeSlice.reducer;
