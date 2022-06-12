import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface SettingsState {
  backgroundColor: string;
}

const initialState: SettingsState = {
  backgroundColor: "red",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setBgColor: (state: SettingsState, action: PayloadAction<string>) => {
      console.log("setColor!!");
      state.backgroundColor = action.payload;
    },
  },
});

export const { setBgColor } = settingsSlice.actions;
export default settingsSlice.reducer;
