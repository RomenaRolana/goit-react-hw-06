import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  name: "",
};

export const filtersSlice = createSlice({
  
  name: "contacts", 
  initialState: INITIAL_STATE, 
  reducers: {
    setFilter(state, action) {
      state.name = action.payload;
    },
  },
});


export const { setFilter } = filtersSlice.actions;


export const filtersReducer = filtersSlice.reducer;


