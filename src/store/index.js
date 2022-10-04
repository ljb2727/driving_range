import { configureStore, createSlice } from "@reduxjs/toolkit";
import golfzone_list from "store/golfzone_list";
import drive_box from "store/drive_box";
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

let driveBox = createSlice({
  name: "driveBox",
  initialState: drive_box,
  reducers: {
    setTime(state, action) {
      /*
      id = store의 아이디
      listId = 타석 리스트 아이디
      time = 남은 시간
       */
      const { id, list, time } = action.payload;
      state[0].타석[0].리스트[1].남은시간 = 50;
      return state;
    },
  },
});

export let { changeHeart, preload } = myHeart.actions;
export let { openDialog, closeDialog, toggleDialog } = showDialog.actions;
export let { setTime } = driveBox.actions;
export default configureStore({
  reducer: {
    golfzone: golfzone.reducer,
    myHeart: myHeart.reducer,
    showDialog: showDialog.reducer,
    driveBox: driveBox.reducer,
  },
});
