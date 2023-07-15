import React, { useState } from "react";
import Comics from "./comics/Comics";

const App = () => {
  const [showComicCarousal, setShowComicCarousal] = useState(false);

  const handleGetStarted = () => {
    setShowComicCarousal(true);
    scrollToComicCarousal();
  };

  const scrollToComicCarousal = () => {
    const comicCarousalElement = document.getElementById("comicCarousal");
    if (comicCarousalElement) {
      comicCarousalElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="hero">
        <div className="hero-content">
          <div className="hero-title">
            <div className="waviy">
              <span style={{ "--i": 1 }}>C</span>
              <span style={{ "--i": 2 }}>O</span>
              <span style={{ "--i": 3 }}>M</span>
              <span style={{ "--i": 4 }}>I</span>
              <span style={{ "--i": 5 }}>C</span>
              {' '}
              {/* Space character */}
              <span style={{ "--i": 7 }}>V</span>
              <span style={{ "--i": 8 }}>A</span>
              <span style={{ "--i": 9 }}>U</span>
              <span style={{ "--i": 10 }}>L</span>
              <span style={{ "--i": 11 }}>T</span>
            </div>
          </div>
          <button className="btn-red" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
      {showComicCarousal && (
        <div id="comicCarousal">
          <Comics />
        </div>
      )}
    </>
  );
};

export default App;

