import React from "react";
import "./Motion.css";

const Motion = () => {
  var ms = document.querySelectorAll(".mover");

  var defaultTiming = {
    duration: 10000,
    iterations: Infinity,
    fill: "both",
    easing: "ease-in-out",
  };

  if (ms[0].style.offsetDistance !== undefined) {
    var easing = "cubic-bezier(.645,.045,0.355,1)";

    ms[0].animate(
      [
        { offsetDistance: 0, offsetRotation: "auto" },
        { offsetDistance: "100%", offsetRotation: "auto" },
      ],
      defaultTiming
    );
  } else {
    document.documentElement.className = "no-motionpath";
  }
  return (
    <>
      <div class="mover"></div>
    </>
  );
};
export default Motion;
