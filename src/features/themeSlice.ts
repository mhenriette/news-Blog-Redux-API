import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState: { value: "white" },
  reducers: {
    changeTheme: (state, action:{payload:string}) => {
      state.value = action.payload;
    },
  },
});
export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
