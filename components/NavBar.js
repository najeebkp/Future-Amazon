import React, { ReactFragment } from "react";
import Link from "next/link";
import Image from "next/image";
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
import { NavMenuArray } from "../constants/constantData";
import { Menu } from "@styled-icons/entypo/Menu";

function NavBar() {
  //router
  const router = useRouter();
  // hamburger toggle state
  const [show, setShow] = React.useState(false);

  // hamburger toggle actions
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="custom-navbar-wrapper">
      <Col>
        {/* Upper Menu Row */}
        <Row className="navbar">
          <Col sm={2}></Col>
          <Col sm={6}>
            <div className="small-font pt-2 first-menu">
              <Col sm={9}>
                <div className="first-menu justify-content-between">
                  <div className="key-color bold">Your Amazon.com</div>
                  {NavMenuArray.map((item, key) => (
                    <div key={key}>
                      <div className="disabled-color" key={key}>
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
              <div className="key-color bold">Orders</div>
            </div>
          </Col>
          <Col sm={4}></Col>
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
                    <div className="key-color bold">Your Amazon.com</div>
                    <hr />
                    {NavMenuArray.map((item, key) => (
                      <div key={key}>
                        <div className="disabled-color" key={key}>
                          {item.name}
                        </div>
                        <hr />
                      </div>
                    ))}
                  </div>

                  <div className="key-color bold text-center">Orders</div>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </>
        </div>
        <Row className="navbar">
          {/* nav icon */}
          <Col sm={2} className="text-center">
            <img
              className="navbar-image"
              src="/Amazon-Logo.png"
              alt="Picture of the author"
              width={110}
            ></img>
          </Col>
          {/* search box */}
          <Col sm={6} className="full-width-on-mobile">
            <InputGroup className="search-bar-wrapper">
              <FormControl />
              <Link href={"/scascas"}>
                <Button
                  variant="outline-secondary"
                  className="searchButton"
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
                <Location size="25" />
              </div>
              <div className="navbar-components">
                <div className="normal-font primary-color-text bold">
                  Deliver to
                </div>
                <div className="key-color normal-font">France</div>
              </div>
            </div>
            <div className="vr"></div>
            <div className="d-flex align-items-center">
              <div>
                <Globe size="25" />
              </div>
              <div className="navbar-components">
                <div className="key-color bold normal-font">EN</div>
              </div>
            </div>
            <div className="vr"></div>
            <div>
              <div className="navbar-components">
                <div className="key-color small-font">Hello Sign In</div>
                <div className="small-font bold">Account & Lists</div>
              </div>
            </div>
            <div className="vr"></div>
            <div className="text-center navbar-components">
              <div className="bold">0</div>
              <ShoppingCart size="17" color={"#1DF7A0"} />
            </div>
          </Col>
        </Row>
      </Col>
    </div>
  );
}

export default NavBar;
