import React, { useMemo, useState } from "react";
import { useAppSelector } from "../../../store/hooks";

export default function AboutPage() {
  const bgColor = useAppSelector((state) => state.settings.backgroundColor);

  return (
    <div style={{ height: "600px", backgroundColor: bgColor }}>
      <h1> About </h1>
    </div>
  );
}
