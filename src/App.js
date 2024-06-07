import React, { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [numLines, setNumLines] = useState(10);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.parentNode.style.height = `${imgRef.current.offsetHeight}px`;
    }
  }, [imgRef]);

  return (
    <div
      style={{
        position: "relative",
        height: "95vh",
        width: "95vw",
        background: "url(/shanai.png) center/cover no-repeat",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          maskImage: "url(/shanai.png)",
          maskRepeat: "no-repeat",
          maskSize: "cover",
        }}
      >
        {Array.from({ length: numLines }, (_, i) => (
          <svg
            key={i}
            height="100%"
            width="2px"
            style={{ overflow: "visible" }}
          >
            <path
              d="M1 0 Q-220 500 1 1000"
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="transparent"
            />
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff0000" />
                <stop offset="100%" stopColor="#ffff00" />
              </linearGradient>
            </defs>
          </svg>
        ))}
      </div>
      <input
        type="range"
        min="1"
        max="15"
        value={numLines}
        onChange={(e) => setNumLines(Number(e.target.value))}
        style={{
          position: "absolute",
          bottom: "10px",
          left: "10px",
          width: "600px",
        }}
      />
    </div>
  );
}

export default App;
