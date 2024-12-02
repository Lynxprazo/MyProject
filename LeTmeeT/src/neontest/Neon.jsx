import React, { useEffect, useRef } from "react";
import "./Neon.css"; // Optional: Style the cursor with CSS

const NeonCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div id="neon-cursor" ref={cursorRef} className="neon-cursor"></div>;
};

export default NeonCursor;
