import { favesRepo } from "../global/globalVariables";
import { createSlice } from "@reduxjs/toolkit";

function getFavourites() {
  let storedFavourites = localStorage.getItem(favesRepo);
  if (storedFavourites === null) {
    storedFavourites = [];
  } else {
    storedFavourites = JSON.parse(storedFavourites);
  }
  return storedFavourites;
}

const initialState = {
  items: getFavourites(),
};

function getIndex(fave, array) {
  return array.findIndex((arrayItem) => arrayItem.id === fave.id);
}

export const favesSlice = createSlice({
  name: "faves",
  initialState,
  reducers: {
    addFave: (state, action) => {
      const newFaves = [...state.items, action.payload];
      localStorage.setItem(favesRepo, JSON.stringify(newFaves));

      state.items = newFaves;
    },

    deleteFave: (state, action) => {
      const copyStateItems = state.items;
      copyStateItems.splice(getIndex(action.payload, state.items), 1);
      localStorage.setItem(favesRepo, JSON.stringify(copyStateItems));

      state.items = copyStateItems;
    },
  },
});

export const { addFave, deleteFave } = favesSlice.actions;

export default favesSlice.reducer;
