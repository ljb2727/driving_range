import { configureStore, createSlice } from "@reduxjs/toolkit";
import golfzone_list from "store/golfzone_list";
let golfzone = createSlice({
  name: "golfzone",
  initialState: golfzone_list,
  reducers: {
    changeInput(state, action) {
      return state.filter((item, i) => {
        console.log(action.payload);
        return state;
      });
    },
  },
});

export let { changeInput } = golfzone.actions;
export default configureStore({
  reducer: {
    golfzone: golfzone.reducer,
  },
});
