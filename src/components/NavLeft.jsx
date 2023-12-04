import React from "react";
import "./Styles/NavLeft.css";

export default function NavLeft() {
  return (
    <div className="youtube-left" style={{cursor:"pointer"}}>
      <div className="nav-bars">
        <i class="fa-solid fa-bars"></i>
      </div>
      <div className="youtube-logo">
        <i class="fa-brands fa-youtube"></i>
      </div>
      <div className="text">Youtube</div>
    </div>
  );
}
