import React, { useState, useEffect } from "react";
import './Footer.css';


const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  //did mount 
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: (e.clientY-22) });
    };

    window.addEventListener("mousemove", handleMouseMove);

    //Will unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

  }, []);//did update

  return (
    <footer>
      Координаты мыши: X = {mousePosition.x}, Y = {mousePosition.y}
    </footer>
  );
};

export default Footer;