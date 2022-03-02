import React from "react";
import BottomNav from "../BottomNav";
import NavBar from "../NavBar";
export default function MyLayout({ children }) {
  return (
    <div className="homepage">
      {/* Common NavBar */}
      <NavBar></NavBar>
      {/* Main Content */}
      <div>{children}</div>
      {/* Common Footer */}
      <BottomNav></BottomNav>
    </div>
  );
}
