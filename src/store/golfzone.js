import { configureStore, createSlice } from "@reduxjs/toolkit";
import golfzone_list from "store/golfzone_list";
let golfzone = createSlice({
  name: "golfzone",
  initialState: golfzone_list,
});

//dialog 전역 상태
let showDialog = createSlice({
  name: "dialog",
  initialState: false,
  reducers: {
    openDialog() {
      console.log("open dialog");
      return true;
    },
    closeDialog() {
      console.log("close dialog");
      return false;
    },
    toggleDialog(state) {
      console.log("toggle dialog");
      return !state;
    },
  },
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
export let { openDialog, closeDialog, toggleDialog } = showDialog.actions;
export default configureStore({
  reducer: {
    golfzone: golfzone.reducer,
    myHeart: myHeart.reducer,
    showDialog: showDialog.reducer,
  },
});
