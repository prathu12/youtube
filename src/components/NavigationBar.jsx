import React from "react";
import NavLeft from "./NavLeft";
import NavCenter from "./NavCenter";
import NavRight from "./NavRight";
import './Styles/Navigationbar.css'

export default function NavigationBar() {
  return (
    <div className="nav-container">
      <NavLeft />
      <NavCenter />
      <NavRight />
    </div>
  );
}
