import { ContactsBookUpload } from "@styled-icons/remix-line";
import React, { useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { ArrowRightShort } from "@styled-icons/bootstrap/ArrowRightShort";
import { ArrowLeftShort } from "@styled-icons/bootstrap/ArrowLeftShort";
import { ShoppingCart } from "@styled-icons/zondicons/ShoppingCart";
import { GlobalContext } from "./context/GlobalContextProvider";
import { APIFetcher } from "../services/ApiService";
import Loading from "../components/Loading";
import Image from "../components/Image";

function ProductDetail(props) {
  const { globalState, globalDispatch } = React.useContext(GlobalContext);
  const [loading, setLoading] = React.useState();
  const [product, setProduct] = React.useState();
  const [productImage, setProductImage] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);
  const getProductDetails = (productId) => {
    APIFetcher(props.id)
      .then((response) => {
        setProduct(response);
        setLoading(false);
      })
      .catch((error) => {});
  };
  React.useEffect(() => {
    setLoading(true);
    if (props && props.id) {
      getProductDetails(props?.id);
    }
  }, [props]);

  // first letter to capital
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
  const handleNext = (key) => {
    if (key) {
      productImage != 0
        ? setProductImage(productImage - 1)
        : setProductImage(2);
      return;
    }
    if (productImage < 2) {
      setProductImage(productImage + 1);
      return;
    }
    setProductImage(0);
  };

  // image hover zoom
  const ImageHoverZoom = ({ imagePath }) => {
    return (
      <div className="img-wrapper">
        <Image className={`product-image hover-zoom`} src={imagePath}></Image>
      </div>
    );
  };

  // handle Quantity
  const handleQuantity = (parameter) => {
    if (parameter == "decrease") {
      let newQuantity = quantity != 1 ? quantity - 1 : 1;
      setQuantity(newQuantity);
    } else {
      let newQuantity = quantity + 1;
      setQuantity(newQuantity);
    }
  };

  // Add to cart
  const handleAddToCart = () => {
    let newQuantity = quantity;
    globalDispatch({
      type: "TOTAL_CART_COUNT",
      payload: quantity + globalState.cartCount,
    });
    updateCart(newQuantity);
  };

  const updateCart = (newQuantity) => {
    let newItem = { count: newQuantity, item: product.id };
    let cartItems = globalState.cartItems;

    let i = cartItems.findIndex((item) => item.item === product.id);

    if (i > -1) {
      cartItems[i].count = cartItems[i].count + newQuantity;
    } else cartItems.push(newItem);

    globalDispatch({
      type: "ADD_TO_CART",
      payload: cartItems,
    });
  };

  return (
    <div>
      {/* wrapper with bg */}
      {!loading && product ? (
        <div>
          <div className={"product-detail-wrapper p-5 " + globalState.theme}>
            {/* content row */}
            <Row>
              {/* leftside image */}
              <Col>
                {/* title */}
                <Row className="justify-content-center pb-2">
                  <Col sm={5}>
                    <div className="d-flex align-items-baseline justify-content-center">
                      <div className={`font-size-very-big bold`}>
                        {product.fname}
                      </div>
                      <div
                        className={
                          `bold font-size-big key-color ` + globalState.theme
                        }
                      >
                        {product.lname}
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <div
                        className={
                          `font-size-big bold key-color ` + globalState.theme
                        }
                      >
                        {"$"}
                      </div>
                      <div
                        className={
                          `font-size-very-big bold key-color ` +
                          globalState.theme
                        }
                      >
                        {product.price?.toString().split(".")[0]}
                      </div>
                      <div
                        className={
                          `font-size-normal bold align-self-end pb-2 key-color ` +
                          globalState.theme
                        }
                      >
                        {product.price?.toString().split(".")[1]}
                      </div>
                    </div>
                  </Col>
                </Row>
                {/* image with buttons */}
                <Row className="justify-content-center align-items-center">
                  <Col
                    sm={5}
                    className="d-flex justify-content-center primary-image"
                  >
                    <ImageHoverZoom
                      imagePath={product && product?.image[productImage]}
                    />
                  </Col>

                  <Col
                    sm={1}
                    className="d-flex justify-content-center prev-button"
                  >
                    <Button
                      className={
                        "primary-cta round m-1 p-1 " + globalState.theme
                      }
                      onClick={() => handleNext("prev")}
                      disabled={productImage == 0}
                    >
                      <ArrowLeftShort size={30} />
                    </Button>
                  </Col>

                  <Col
                    sm={1}
                    className="d-flex justify-content-center next-button"
                  >
                    <Button
                      className={
                        "primary-cta round m-1 p-1 " + globalState.theme
                      }
                      onClick={() => handleNext()}
                      disabled={product.image.length - 1 == productImage}
                    >
                      <ArrowRightShort size={30} />
                    </Button>
                  </Col>
                </Row>
                <div className="small-font text-center disabled-color pt-4">
                  Hover for 2 seconds on image to enlarge
                </div>
              </Col>
              {/* rightside details */}
              <Col>
                <div className="font-size-big bold pb-2">
                  {product &&
                    capitalize(product.fname) + " " + capitalize(product.lname)}
                </div>
                <div className="d-flex align-items-center  pb-3">
                  <div className="light-grey-color font-size-normal-2">
                    Price
                  </div>
                  &emsp;
                  <div
                    className={
                      "font-size-big bold key-color " + globalState.theme
                    }
                  >
                    {`$ ` + product.price}
                  </div>
                </div>
                <div
                  className={
                    "primary-text normal-font desc " + globalState.theme
                  }
                >
                  {product.desc}
                </div>
              </Col>
            </Row>
          </div>
          {/* bottom green row of buttons */}
          <Row className={"key-color-bg p-5 m-0 " + globalState.theme}>
            {/* left side */}
            <Col className="align-self-center">
              <div className="d-flex justify-content-evenly">
                {/* quantity */}
                <div className="quantity-wrapper">
                  <div className="quantity-text">Qty</div>&emsp;
                  <Button
                    className={
                      "primary-cta round padding-normal " + globalState.theme
                    }
                    onClick={() => handleQuantity("decrease")}
                  >
                    -
                  </Button>
                  &ensp;
                  <div className="quantity-circle">{quantity}</div>&ensp;
                  <Button
                    className={
                      "primary-cta round padding-normal " + globalState.theme
                    }
                    onClick={() => handleQuantity("increase")}
                  >
                    +
                  </Button>
                </div>
                {/* color */}
                <div className="quantity-wrapper">
                  <div>Color</div>&ensp;
                  <div className="quantity-circle white"></div>&ensp;
                  <div className="quantity-circle black"></div>&ensp;
                </div>
              </div>
            </Col>
            {/* right side buttons */}
            <Col className="user-right-buttons">
              <Button
                className={"secondary-cta oval " + globalState.theme}
                onClick={handleAddToCart}
              >
                <ShoppingCart
                  size="15"
                  color={globalState.theme == "dark" ? "#1DF7A0" : "#ff7449"}
                />
                &emsp;
                {"Add to cart"}
              </Button>
              &emsp;
              <Button className={"primary-cta oval " + globalState.theme}>
                Add to list
              </Button>
            </Col>
          </Row>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default ProductDetail;
