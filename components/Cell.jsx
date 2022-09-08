import React, { useContext } from "react";
import { PainterContext } from "../contexts/PainterContext";

export default function Cell(props)
{
  const { xPos, yPos } = props;

  const { pixels, paint } = useContext(PainterContext);

  return (
    <div
      style={{
        width: "40px",
        height: "40px",

        backgroundColor: pixels[yPos][xPos],

        borderWidth: "1px",
        borderStyle: "solid",
        margin: "0px",
      }}
      onClick={() =>
      {
        paint(xPos, yPos);
      }}
    ></div>
  );
}
