import React from "react";
import Button from "@mui/material/Button";
import { useAppDispatch } from "../../../store/hooks";
import { setBgColor } from "../../../store/reducers/settingsReducers";

export default function SettingsPage() {
  const dispatch = useAppDispatch();
  return (
    <div style={{ height: "600px", backgroundColor: "white" }}>
      <h1> Settings </h1>
      <Button
        onClick={(e: any) => {
          dispatch(setBgColor(e.target.value));
        }}
        value={"green"}
        variant="contained"
      >
        Green
      </Button>
      <Button
        onClick={(e: any) => {
          dispatch(setBgColor(e.target.value));
        }}
        variant="contained"
        value={"blue"}
      >
        Blue
      </Button>
    </div>
  );
}
