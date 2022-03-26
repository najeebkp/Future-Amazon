import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import SideBar from "./SideBar";
import ProductGrid from "./ProductGrid";

function ProductListing(props) {
  return (
    <div className="p-5" style={{ background: "#fff" }}>
      <Row>
        <Col sm={2}>
          <SideBar />
        </Col>
        <Col>
          {props && props.productsList && (
            <ProductGrid productsList={props.productsList} />
          )}
        </Col>
      </Row>
    </div>
  );
}

export default ProductListing;
