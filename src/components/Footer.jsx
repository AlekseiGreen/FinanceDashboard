// import React, { Component } from 'react';
// import './Footer.css';

// function Footer() {
//     return(
//         <div className="footer">
//             Footer
//         </div>
//     )
// }

// export default Footer;


import React, { useState, useEffect } from "react";

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <footer>
      Координаты мыши: X = {mousePosition.x}, Y = {mousePosition.y}
    </footer>
  );
};

export default Footer;