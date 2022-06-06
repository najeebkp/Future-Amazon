import React from "react";
import { GlobalContext } from "./context/GlobalContextProvider";

import { Container, Row, Col, Button } from "react-bootstrap";

function Cart() {
  const { globalState, globalDispatch } = React.useContext(GlobalContext);

  const total = () => {
    let array = [];
    globalState.cartItems.map((product) => {
      array.push(product.count * product.item.price);
    });
    return array.reduce((a, b) => a + b, 0).toFixed(2);
  };

  const handleQuantity = (action, id) => {
    let i = globalState.cartItems.find((item) => item.item._id == id);
    let cartItems = globalState.cartItems;

    if (action == "decrease") {
      if (i.count > 1) {
        cartItems.map((product) => {
          if (product.item._id == id) {
            product.count = product.count - 1;
          }
        });
        globalDispatch({
          type: "TOTAL_CART_COUNT",
          payload: globalState.cartCount - 1,
        });
        globalDispatch({
          type: "ADD_TO_CART",
          payload: cartItems,
        });
      }
    } else {
      cartItems.map((product) => {
        if (product.item._id == id) {
          product.count = product.count + 1;
        }
      });
      globalDispatch({
        type: "TOTAL_CART_COUNT",
        payload: globalState.cartCount + 1,
      });
      globalDispatch({
        type: "ADD_TO_CART",
        payload: cartItems,
      });
    }
  };

  // remove item
  const removeItem = (item) => {
    let cartItems = globalState.cartItems;

    let newCartCount = globalState.cartCount - item.count;
    cartItems = cartItems.filter(
      (product) => product.item._id != item.item._id,
    );

    globalDispatch({
      type: "ADD_TO_CART",
      payload: cartItems,
    });
    globalDispatch({
      type: "TOTAL_CART_COUNT",
      payload: newCartCount,
    });
  };
  return (
    <div className={"product-detail-wrapper p-5 " + globalState.theme}>
      <Container>
        <Row>
          <Col>
            {globalState.cartItems.length > 0 && (
              <React.Fragment>
                <div className="font-size-normal-2 bold">Shopping Cart</div>
                <div
                  className="text-end small-font"
                  style={{ marginRight: "10px" }}
                >
                  Price
                </div>
              </React.Fragment>
            )}
            {globalState.cartItems.length > 0 ? (
              globalState.cartItems.map((item, key) => (
                <div key={key} className="cart-item">
                  <div className="left">
                    <img src={item.item.image[0]} />
                  </div>
                  <div className="center">
                    <div>
                      <div>{item.item.fname + " " + item.item.lname}</div>
                      <div className="small-font disabled-color">In Stock</div>
                      <div
                        className={
                          "small-font light-grey-color show " +
                          globalState.theme
                        }
                      >
                        Eligible for FREE Shipping
                      </div>
                      {/* quantity */}
                      <div className="quantity-wrapper">
                        <Button
                          className={
                            "primary-cta round padding-normal very-small " +
                            globalState.theme
                          }
                          onClick={() =>
                            handleQuantity("decrease", item.item._id)
                          }
                        >
                          -
                        </Button>
                        <div className="quantity-circle transparent">
                          {item.count}
                        </div>
                        <Button
                          className={
                            "primary-cta round padding-normal very-small " +
                            globalState.theme
                          }
                          onClick={() =>
                            handleQuantity("increase", item.item._id)
                          }
                        >
                          +
                        </Button>
                        &emsp;
                        <div className="vr"></div>&emsp;
                        <div
                          style={{ cursor: "pointer" }}
                          className={
                            `small-font key-color ` + globalState.theme
                          }
                          onClick={() => removeItem(item)}
                        >
                          Delete
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`right key-color ` + globalState.theme}>
                    {"$ " + item.item.price}
                  </div>
                </div>
              ))
            ) : (
              <div className="pt-2 pb-2">
                <div className="emptycart">
                  <div className="font-size-big">
                    Your Amazon Cart is empty.
                  </div>
                  <div className="normal-font">
                    Your Shopping Cart lives to serve. Give it purpose — fill it
                    with groceries, clothing, household supplies, electronics,
                    and more. <br></br>Continue shopping on the
                    <a
                      href="/"
                      style={{
                        color:
                          globalState.theme == "dark" ? "#1df7a0" : "#ff7449",
                      }}
                    >
                      {" "}
                      Amazon.com homepage
                    </a>
                    , learn about today's deals, or visit your Wish List.
                  </div>
                </div>
              </div>
            )}
          </Col>
          {globalState.cartItems.length > 0 && (
            <Col md={3}>
              <div className="subtotal-sidebar">
                <div>
                  <div className="d-flex align-center">
                    Subtotal ({globalState.cartCount} items):{" "}
                    <div
                      className={`right key-color bold ` + globalState.theme}
                    >
                      &ensp;${total()}
                    </div>
                  </div>
                  <br></br>
                  <br></br>
                  <Button className={"primary-cta w-100 " + globalState.theme}>
                    Proceed to checkout
                  </Button>
                </div>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Cart;
