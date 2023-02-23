import { configureStore } from "@reduxjs/toolkit";
import favesReducer from "../features/favesSlice";

export default configureStore({
  reducer: {
    faves: favesReducer,
  },
});
