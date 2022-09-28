import { configureStore, createSlice } from "@reduxjs/toolkit";
import golfzone_list from "store/golfzone_list";
let golfzone = createSlice({
  name: "golfzone",
  initialState: golfzone_list,
});

//즐겨찾기 저장
let myHeart = createSlice({
  name: "heart",
  initialState: [],
  reducers: {
    preload(state, action) {
      return action.payload;
    },
    changeHeart(state, action) {
      console.log("즐겨찾기");
      const id = action.payload;
      if (state.includes(id)) {
        state.splice(state.indexOf(id), 1);
      } else {
        state.push(id);
      }

      localStorage.setItem("myHeart", JSON.stringify(state));
      return state;
    },
  },
});

export let { changeHeart, preload } = myHeart.actions;
export default configureStore({
  reducer: {
    golfzone: golfzone.reducer,
    myHeart: myHeart.reducer,
  },
});
