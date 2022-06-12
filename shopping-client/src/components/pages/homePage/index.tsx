import React from "react";
import { useAppSelector } from "../../../store/hooks";

export default function HomePage() {
  const bgColor = useAppSelector((state) => state.settings.backgroundColor);

  return (
    <div style={{ height: "600px", backgroundColor: bgColor }}>
      <h1> Home </h1>
    </div>
  );
}
