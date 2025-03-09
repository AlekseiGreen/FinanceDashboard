import React, { useState } from "react";
import "./Logic.css";




const Logic = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 100, y: 22 });
    const [offset, setOffset] = useState({ x: 0, y: 0 });
  
    // Начало перетаскивания
    const handleMouseDown = (e) => {
      setIsDragging(true);
  
      // Вычисляем смещение курсора относительно верхнего левого угла квадрата
      setOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
      console.log("Координата X=", e.clientX);
      console.log("Координата Y=", e.clientY);
    };
  
    // Перетаскивание
    const handleMouseMove = (e) => {
      if (isDragging) {
        // Обновляем позицию квадрата
        setPosition({
          x: e.clientX - offset.x,
          y: e.clientY - offset.y,
        });
      }
    };
  
    // Завершение перетаскивания
    const handleMouseUp = () => {
      setIsDragging(false);
    };
  
    return (
      <div
        style={{
          position: "absolute",
          left: position.x,
          top: position.y,  
          width: "100px",
          height: "100px",
          backgroundColor: "lightblue",
          border: "2px solid blue",
          cursor: "move",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        Перетащи меня
      </div>
    );
  };

export default Logic;
