import React, { useState, useRef, useEffect } from 'react';
import { useContext } from "react";
import { DarkContext } from "../index";

function Card({ dataImage, children, onClick }) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const cardRef = useRef(null);
  let mouseLeaveDelay;
    
  const handleCardClick = () => {
    if (onClick) {
      onClick();
    }
  };

  useEffect(() => {
    setWidth(cardRef.current.offsetWidth);
    setHeight(cardRef.current.offsetHeight);

    return () => {
      // Clean up and clear the mouseLeaveDelay
      if (mouseLeaveDelay) {
        clearTimeout(mouseLeaveDelay);
      }
    };
  }, []);

  const handleMouseMove = (e) => {
    const { offsetLeft, offsetTop } = cardRef.current;
    setMouseX(e.pageX - offsetLeft - width / 2);
    setMouseY(e.pageY - offsetTop - height / 2);
  };

  const handleMouseEnter = () => {
    if (mouseLeaveDelay) {
      clearTimeout(mouseLeaveDelay);
    }
  };

  const handleMouseLeave = () => {
    mouseLeaveDelay = setTimeout(() => {
      setMouseX(0);
      setMouseY(0);
    }, 1000);
  };

  const mousePX = mouseX / width;
  const mousePY = mouseY / height;

  const cardStyle = {
    transform: `rotateY(${mousePX * 30}deg) rotateX(${mousePY * -30}deg)`,
  };

  const cardBgTransform = {
    transform: `translateX(${mousePX * -40}px) translateY(${mousePY * -40}px)`,
  };

  const cardBgImage = {
    backgroundImage: `url(${dataImage})`,
    };
    
  const { darkMode, setDarkMode } = useContext(DarkContext);

  return (
    <div
      className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      ref={cardRef}
      >
      <div className="card" style={cardStyle}>
        <div className="card-bg" style={{...cardBgImage }}></div>
        <div className="card-info">{children}</div>
      </div>
    </div>
  );
}

export default Card;
