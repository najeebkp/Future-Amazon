import React from "react";
import Cart from "../components/Cart";
import PrimaryLayout from "../components/layout/PrimaryLayout";

export default function CartView() {
  return (
    <div>
      <Cart></Cart>
    </div>
  );
}
CartView.Layout = PrimaryLayout;
