import { configureStore } from "@reduxjs/toolkit";
import timeReducer from "./timeSlice";

/**
 * The application redux store which has only one reducer.
 */
export default configureStore({
  reducer: {
    time: timeReducer,
  },
});
