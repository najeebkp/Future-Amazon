import React from "react";
import Link from "next/link";

import { useRouter } from "next/router";
import {
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
  Offcanvas,
} from "react-bootstrap";
import { Search } from "@styled-icons/evaicons-solid/Search";
import { Location } from "@styled-icons/ionicons-outline/Location";
import { Globe } from "@styled-icons/bootstrap/Globe";
import { ShoppingCart } from "@styled-icons/zondicons/ShoppingCart";
import { DarkMode } from "@styled-icons/material-sharp/DarkMode";
import { LightMode } from "@styled-icons/material-sharp/LightMode";
import { NavMenuArray } from "../constants/constantData";
import { Menu } from "@styled-icons/entypo/Menu";
import { GlobalContext } from "./context/GlobalContextProvider";

function NavBar() {
  //context
  const { globalState, globalDispatch } = React.useContext(GlobalContext);

  //router
  const router = useRouter();
  // hamburger toggle state
  const [show, setShow] = React.useState(false);

  // hamburger toggle actions
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // handle Dark Mode
  const handleDarkMode = () => {
    if (globalState.theme == "dark") {
      globalDispatch({ type: "TOGGLE_THEME", payload: "light" });
    } else {
      globalDispatch({ type: "TOGGLE_THEME", payload: "dark" });
    }
  };
  return (
    <div className={"custom-navbar-wrapper " + globalState.theme}>
      <Col>
        {/* Upper Menu Row */}
        <Row className="navbar">
          <Col sm={2}></Col>
          <Col sm={6}>
            <div className="small-font pt-2 first-menu">
              <Col sm={9}>
                <div className="first-menu justify-content-between">
                  <div className={"key-color bold " + globalState.theme}>
                    Your Amazon.com
                  </div>
                  {NavMenuArray.map((item, key) => (
                    <div key={key}>
                      <div
                        className={"disabled-color " + globalState.theme}
                        key={key}
                      >
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
              <div className={"key-color bold " + globalState.theme}>
                Orders
              </div>
            </div>
          </Col>
          <Col sm={4}>
            <div className="d-flex justify-content-end">
              <div onClick={handleDarkMode} style={{ cursor: "pointer" }}>
                {globalState.theme == "dark" ? (
                  <LightMode size="17" color={"#fff"} />
                ) : (
                  <DarkMode size="17" color={"#000"} />
                )}
              </div>
            </div>
          </Col>
        </Row>

        {/* main navbar row */}
        <div className="hamburger">
          <>
            <Menu size={28} onClick={handleShow}></Menu>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton closeVariant="white">
                {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="">
                  <div className="text-center pt-5">
                    <div className={"key-color bold " + globalState.theme}>
                      Your Amazon.com
                    </div>
                    <hr />
                    {NavMenuArray.map((item, key) => (
                      <div key={key}>
                        <div
                          className={"disabled-color " + globalState.theme}
                          key={key}
                        >
                          {item.name}
                        </div>
                        <hr />
                      </div>
                    ))}
                  </div>

                  <div
                    className={
                      "key-color bold text-center " + globalState.theme
                    }
                  >
                    Orders
                  </div>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </>
        </div>
        <Row className="navbar">
          {/* nav icon */}
          <Col sm={2} className="text-center">
            <Link href="/">
              <img
                className="navbar-image"
                src={
                  globalState.theme == "dark"
                    ? "/Amazon-Logo.png"
                    : "https://www.peninsulafamilyservice.org/wp-content/uploads/2019/08/amazon-logo-transparent.png"
                }
                alt="Amazon-logo"
                width={globalState.theme == "dark" ? 110 : 125}
              ></img>
            </Link>
          </Col>
          {/* search box */}
          <Col sm={6} className="full-width-on-mobile">
            <InputGroup className="search-bar-wrapper">
              <FormControl />
              <Link href={"/scascas"}>
                <Button
                  variant="outline-secondary"
                  className={"searchButton " + globalState.theme}
                  id="button-addon2"
                >
                  <Search size="17" title="Unlock account" />
                </Button>
              </Link>
            </InputGroup>
          </Col>

          {/* Right side menu items */}
          <Col
            className="d-flex align-items-center justify-content-around full-width-on-mobile"
            sm={4}
          >
            <div className="d-flex align-items-center">
              <div>
                <Location
                  size="25"
                  className={"menu-icons " + globalState.theme}
                />
              </div>
              <div className="navbar-components">
                <div
                  className={
                    "normal-font primary-color-text bold " + globalState.theme
                  }
                >
                  Deliver to
                </div>
                <div className={"key-color normal-font " + globalState.theme}>
                  France
                </div>
              </div>
            </div>
            <div className="vr"></div>
            <div className="d-flex align-items-center">
              <div>
                <Globe
                  className={"menu-icons " + globalState.theme}
                  size="25"
                />
              </div>
              <div className="navbar-components">
                <div
                  className={"key-color bold normal-font " + globalState.theme}
                >
                  EN
                </div>
              </div>
            </div>
            <div className="vr"></div>
            <div>
              <div className="navbar-components">
                <div className={"key-color small-font " + globalState.theme}>
                  Hello Sign In
                </div>
                <div className={"small-font bold " + globalState.theme}>
                  Account & Lists
                </div>
              </div>
            </div>
            <div className="vr"></div>
            <div className="text-center navbar-components">
              <div className={"bold primary-color-text " + globalState.theme}>
                {globalState.cartCount}
              </div>
              <ShoppingCart
                size="17"
                color={globalState.theme == "dark" ? "#1DF7A0" : "#ff7449"}
              />
            </div>
          </Col>
        </Row>
      </Col>
    </div>
  );
}

export default NavBar;
