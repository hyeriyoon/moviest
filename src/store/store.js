import { configureStore } from "@reduxjs/toolkit";
import favesReducer from "../features/faves/favesSlice";

export default configureStore({
  reducer: {
    faves: favesReducer,
  },
});
