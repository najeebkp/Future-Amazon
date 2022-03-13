import React from "react";

export default function SideBar() {
  return (
    <div className="sidebar-wrapper">
      <div className="disabled-color font-size-normal-2 bold">
        Show results for
      </div>
      <div>
        <div className="disabled-color small-font bold pt-3">Electronics</div>
        <div className="disabled-color small-font bold pt-3">
          {"Men's Fashion"}
        </div>
        <div className="disabled-color small-font bold pt-3">
          {"Women's Fashion"}
        </div>
        <div className="disabled-color small-font bold pt-3">Books</div>
        <div className="disabled-color small-font bold pt-3">Shoes</div>
        <div className="disabled-color small-font bold pt-3">Beauty</div>
      </div>
    </div>
  );
}
