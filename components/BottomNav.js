import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { BottomNavMenu, Footer } from "../constants/constantData";

function BottomNav() {
  return (
    <div className="BottomNav-Wrapper">
      <Container>
        {/* Bottom Menu */}
        <Row className="pb-5">
          {BottomNavMenu.map((item, key) => (
            <Col md={3} className="pb-4" key={key}>
              <div className="bold normal-font" key={key}>
                {item.title}
              </div>
              {item.links?.map((subItem, subKey) => (
                <div
                  className="light-grey-color pb-1 pt-1 small-font"
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
              src="https://jitsvinger.co.za/wp-content/uploads/2018/04/Amazon-Logo-1024x373.png"
              alt="Picture of the author"
              width={110}
            ></img>
          </Col>
          <Col sm={6}>
            <Row>
              {Footer.map((item, key) => (
                <Col key={key}>
                  <div className="disabled-color small-font" key={key}>
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
