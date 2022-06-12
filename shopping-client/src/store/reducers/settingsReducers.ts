import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface SettingsState {
  backgroundColor: string;
  fontSize: string;
  numberOfOperations: number;
}

const initialState: SettingsState = {
  backgroundColor: "red",
  fontSize: "15px",
  numberOfOperations: 0,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setBgColor: (state: SettingsState, action: PayloadAction<string>) => {
      state.backgroundColor = action.payload;
      state.numberOfOperations++;
    },
    setFontSize: (state: SettingsState, action: PayloadAction<string>) => {
      state.fontSize = action.payload;
      //   state.numberOfOperations++;
    },
  },
});

export const { setBgColor, setFontSize } = settingsSlice.actions;
export default settingsSlice.reducer;
