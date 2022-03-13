import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import SideBar from "./SideBar";
import ProductGrid from "./ProductGrid";

function ProductListing() {
  return (
    <div className="p-5" style={{ background: "#fff" }}>
      <Row>
        <Col sm={2}>
          <SideBar />
        </Col>
        <Col>
          <ProductGrid />
        </Col>
      </Row>
    </div>
  );
}

export default ProductListing;
