import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface SettingsState {
  backgroundColor: string;
  fontSize: string;
}

const initialState: SettingsState = {
  backgroundColor: "red",
  fontSize: "15px",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setBgColor: (state: SettingsState, action: PayloadAction<string>) => {
      state.backgroundColor = action.payload;
    },
    setFontSize: (state: SettingsState, action: PayloadAction<string>) => {
      state.fontSize = action.payload;
    },
  },
});

export const { setBgColor, setFontSize } = settingsSlice.actions;
export default settingsSlice.reducer;
