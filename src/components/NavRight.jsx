import React from "react";
import './Styles/NavRight.css';

export default function NavRight() {
  return (
    <div className="nav-right" style={{cursor:"pointer"}}>
      <div className="navdots-right">
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
      <div className="profile">
        <i class="fa-regular fa-user"></i>
      </div>
      <button className="btn" style={{cursor:"pointer"}}>Sign In</button>
    </div>
  );
}
