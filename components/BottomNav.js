import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { BottomNavMenu, Footer } from "../constants/constantData";
import { GlobalContext } from "./context/GlobalContextProvider";

function BottomNav() {
  //context
  const { globalState, globalDispatch } = React.useContext(GlobalContext);
  return (
    <div className={"BottomNav-Wrapper " + globalState.theme}>
      <Container>
        {/* Bottom Menu */}
        <Row className="pb-5">
          {BottomNavMenu.map((item, key) => (
            <Col md={3} className="pb-4" key={key}>
              <div
                className={"bold normal-font " + globalState.theme}
                key={key}
              >
                {item.title}
              </div>
              {item.links?.map((subItem, subKey) => (
                <div
                  className={
                    "light-grey-color pb-1 pt-1 small-font " + globalState.theme
                  }
                  key={subKey}
                >
                  <br></br>
                  {subItem.title}
                </div>
              ))}
            </Col>
          ))}
        </Row>
        {/* Bottom Icon And Links */}
        <Row className="pt-5 pb-4">
          <Col sm={6}>
            <img
              className="navbar-image"
              src={
                globalState.theme == "dark"
                  ? "/Amazon-Logo.webp"
                  : "https://www.peninsulafamilyservice.org/wp-content/uploads/2019/08/amazon-logo-transparent.png"
              }
              alt="Picture of the author"
              width={110}
            ></img>
          </Col>
          <Col sm={6}>
            <Row>
              {Footer.map((item, key) => (
                <Col key={key}>
                  <div
                    className={"disabled-color small-font " + globalState.theme}
                    key={key}
                  >
                    {item.title}
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BottomNav;
