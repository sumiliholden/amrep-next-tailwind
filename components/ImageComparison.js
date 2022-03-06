import Layout from "../layouts/Layout";
import { useState, useRef, TouchEvent } from "react";

export default function ImageComparison(props) {
  const [imageRevealFraq, setImageRevealFraq] = useState(0.5);
  const imageContainer = useRef(undefined);

  const slide = (xPosition) => {
    const containerBoundingRect =
      imageContainer.current.getBoundingClientRect();

    setImageRevealFraq(() => {
      if (xPosition < containerBoundingRect.left) {
        return 0;
      } else if (xPosition > containerBoundingRect.right) {
        return 1;
      } else {
        return (
          (xPosition - containerBoundingRect.left) / containerBoundingRect.width
        );
      }
    });
  };
  const handleTouchMove = (event = TouchEvent) => {
    slide(event.touches.item(0).clientX);
  };
  const handleMouseDown = () => {
    window.onmousemove = handleMouseMove;
    window.onmouseup = handleMouseUp;
  };
  const handleMouseMove = (event = MouseEvent) => {
    slide(event.clientX);
  };
  const handleMouseUp = () => {
    window.onmousemove = undefined;
    window.onmouseup = undefined;
  };
  return (
    <div className="max-w-7xl mx-auto py-0 sm:py-8 sm:px-6  ">
      <div
        ref={imageContainer}
        className="overflow-hidden relative select-none group"
      >
        <img
          src={props.beforeImage}
          alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
          className="pointer-events-none"
        />
        
        <img
          style={{
            filter: "",
            clipPath: `polygon(0 0, ${imageRevealFraq * 100}% 0, ${
              imageRevealFraq * 100
            }% 100%, 0 100%)`,
          }}
          src={props.afterImage}
          alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
          className="absolute inset-0 pointer-events-none"
        />
        <div
          style={{ left: `${imageRevealFraq * 100}%` }}
          className="absolute inset-y-0 group-hover:opacity-100 md:opacity-0"
        >
          <div className="relative h-full opacity-50 hover:opacity-100">
            <div className="absolute inset-y-0 bg-white w-0.5 -ml-px "></div>
            <div
              style={{ touchAction: "none" }}
              onMouseDown={handleMouseDown}
              onTouchMove={handleTouchMove}
              className="h-12 w-12 -ml-6 -mt-6 rounded-full bg-white absolute top-1/2 shadow-xl flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 tex-gray-400 rotate-90 transform cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
