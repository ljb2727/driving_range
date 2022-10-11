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
  initialState: { show: false, title: "", text: "" },
  reducers: {
    openDialog(state, action) {
      console.log("open dialog");

      state.show = true;

      if (typeof action.payload !== "undefined") {
        state.title = action.payload.title;
        state.text = action.payload.text;
      }
      return state;
    },
    closeDialog(state) {
      console.log("close dialog");
      state.show = false;
      return state;
    },
    toggleDialog(state, action) {
      console.log("toggle dialog");
      return (state.show = !state);
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

      const id = action.payload.number;
      const favorite = action.payload.favorite;
      console.log(`id:${id}, favorite:${favorite}`);
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
      //state[0].타석[0].리스트[1].남은시간 = 10;
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
