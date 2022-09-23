import { configureStore, createSlice } from "@reduxjs/toolkit";
import golfzone_list from "store/golfzone_list";
let golfzone = createSlice({
  name: "golfzone",
  initialState: golfzone_list,
});

//즐겨찾기 저장
let myHeart = createSlice({
  name: "heart",
  initialState: ["1", "3", "2"],
  reducers: {
    changeHeart(state, action) {
      console.log("리덕스");
      return ["2", "4"];
    },
  },
});

export let { changeHeart } = myHeart.actions;
export default configureStore({
  reducer: {
    golfzone: golfzone.reducer,
    myHeart: myHeart.reducer,
  },
});
