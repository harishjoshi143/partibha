import React, { useRef } from "react";
import Print from "./Print";

const OMRSheet = () => {
  const canvasRef = useRef(null);

  

  const handleSignature = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    const getMousePosition = (event) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };

    const startDrawing = (event) => {
      isDrawing = true;
      const { x, y } = getMousePosition(event);
      lastX = x;
      lastY = y;
    };

    const draw = (event) => {
      if (!isDrawing) return;
      const { x, y } = getMousePosition(event);
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.stroke();
      lastX = x;
      lastY = y;
    };

    const stopDrawing = () => {
      isDrawing = false;
    };

    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);
  };

  return (
    <div className="flex w-full border-b border-black">
      
      <div className="w-44 h-20 mt-4 relative">
        <div className="flex justify-center" onClick={handleSignature}>
          <canvas
            ref={canvasRef}
            width="164"
            height="100"
            style={{ border: "1px solid black" }}
            className="bg-gray text-white w-[164px] h-full absolute -right-2.5 scale-y-105  flex flex-col justify-center items-center px-4"
          ></canvas>
        </div>{" "}
        <p className="font-normal text-black mt-24 text-center text-base ms-6">
          click the box and signature
        </p>
      </div>
    </div>
  );
};

export default OMRSheet;
