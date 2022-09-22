import { configureStore, createSlice } from "@reduxjs/toolkit";

let golfzone = createSlice({
  name: "golfzone",
  initialState: [
    { label: "쇼골프여의도점", value: 1 },
    { label: "쇼골프김포공항점", value: 2 },
    { label: "대성골프클럽", value: 3 },
    { label: "엠스퀘어골프클럽", value: 4 },
    { label: "조광골프연습장", value: 5 },
    { label: "제이제이골프클럽", value: 6 },
    { label: "그랜드골프클럽", value: 7 },
    { label: "abc test", value: 8 },
  ],
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
