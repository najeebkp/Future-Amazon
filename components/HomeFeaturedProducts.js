import React from "react";
import Link from "next/link";

import { Col, Row, Container, Button } from "react-bootstrap";
import { ArrowRightShort } from "@styled-icons/bootstrap/ArrowRightShort";
import { ArrowLeftShort } from "@styled-icons/bootstrap/ArrowLeftShort";

import { GlobalContext } from "./context/GlobalContextProvider";

function HomeFeaturedProducts(props) {
  //context
  const { globalState, globalDispatch } = React.useContext(GlobalContext);

  const [featuring, setFeaturing] = React.useState(0);
  const [spinnerTrigger, setSpinnerTrigger] = React.useState(false);

  const handleNext = (key) => {
    if (key) {
      featuring != 0 ? setFeaturing(featuring - 1) : setFeaturing(2);

      return;
    }
    if (featuring < 2) {
      setFeaturing(featuring + 1);

      return;
    }
    setFeaturing(0);
  };

  const ReturnData = ({ data }) => {
    return (
      <>
        {data && (
          <>
            <div className="d-flex align-items-baseline">
              <div className={`font-size-big bold fname`}>{data.fname}</div>
              <div className={`bold lname`} style={{ fontSize: "30px" }}>
                {data.lname}
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <div className={`font-size-big bold price`}>{"$"}</div>
              <div className={`font-size-very-big bold price`}>
                {data.price?.toString().split(".")[0]}
              </div>
              <div
                className={`font-size-normal bold align-self-end pb-2 price`}
              >
                {data.price?.toString().split(".")[1]}
              </div>
            </div>
          </>
        )}
      </>
    );
  };

  return (
    <div className="home-featured-products-wrapper">
      <Container style={{ margin: 0, maxWidth: "none" }}>
        {props && (
          <>
            <Row>
              <Col md={8} className={"feature-1 " + globalState.theme}>
                <Container>
                  <Row className="justify-content-center h-100">
                    <Col
                      md={8}
                      className="align-items-center h-100 d-flex justify-content-center"
                    >
                      <Row>
                        <Col>
                          <div className="d-flex align-items-baseline">
                            <div className="font-size-very-big bold">
                              {" "}
                              {props.topFeatured[featuring]?.fname}{" "}
                            </div>
                            <div
                              className={
                                "key-color font-size-big bold " +
                                globalState.theme
                              }
                            >
                              {props.topFeatured[featuring]?.lname}
                            </div>
                          </div>
                          <div className="d-flex justify-content-end">
                            <div
                              className={
                                "key-color font-size-big bold " +
                                globalState.theme
                              }
                            >
                              {"$"}
                            </div>
                            <div
                              className={
                                "font-size-very-big bold key-color " +
                                globalState.theme
                              }
                            >
                              {
                                props.topFeatured[featuring]?.price
                                  .toString()
                                  .split(".")[0]
                              }
                            </div>
                            <div
                              className={
                                "font-size-normal bold key-color align-self-end pb-2 " +
                                globalState.theme
                              }
                            >
                              {
                                props.topFeatured[featuring]?.price
                                  .toString()
                                  .split(".")[1]
                              }
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline justify-content-end">
                            {props &&
                              props.topFeatured &&
                              props.topFeatured[featuring] && (
                                <Link
                                  href={props.topFeatured[
                                    featuring
                                  ]?._id.toString()}
                                >
                                  <Button
                                    className={
                                      "primary-cta " + globalState.theme
                                    }
                                  >
                                    Buy now <ArrowRightShort size={25} />
                                  </Button>
                                </Link>
                              )}
                          </div>
                        </Col>
                        <Col>
                          <Row className="justify-content-end">
                            <Col className="text-center">
                              <img
                                className="feature-image"
                                style={{ maxWidth: "250px" }}
                                src={props.topFeatured[featuring]?.image[0]}
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  {/* next and previous buttons */}
                  <Row className="justify-content-end position-relative">
                    <Col sm={2} className="text-center pt-2">
                      <Button
                        className={"primary-cta m-1 p-1 " + globalState.theme}
                        onClick={() => handleNext("prev")}
                      >
                        <ArrowLeftShort size={30} />
                      </Button>
                      <Button
                        className={"primary-cta m-1 p-1 " + globalState.theme}
                        onClick={() => handleNext()}
                      >
                        <ArrowRightShort size={30} />
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </Col>
              <Col>
                <Row className="feature-2">
                  <Col>
                    <Row>
                      <Col>
                        <ReturnData data={props.featured[0]} />
                      </Col>
                      <Col>
                        {props && props.featured && props.featured[0] && (
                          <Link
                            href={props.featured[0] && props.featured[0]._id}
                          >
                            <img
                              className="feature-image"
                              style={{ maxWidth: "150px" }}
                              src={props.featured[0]?.image}
                            />
                          </Link>
                        )}
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="feature-3">
                  <Col>
                    <Row>
                      <Col>
                        <ReturnData data={props.featured[1]} />
                      </Col>
                      <Col>
                        {props && props.featured && props.featured[1] && (
                          <Link href={props.featured[1]?._id.toString()}>
                            <img
                              className="feature-image"
                              style={{ maxWidth: "120px" }}
                              src={props.featured[1]?.image}
                            />
                          </Link>
                        )}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col className="feature-4">
                <Row>
                  <Col>
                    {" "}
                    <ReturnData data={props.featured[2]} />
                  </Col>
                  <Col sm={7}>
                    {props && props.featured && props.featured[2] && (
                      <Link href={props.featured[2]?._id.toString()}>
                        <img
                          className="feature-image"
                          style={{ maxWidth: "250px" }}
                          src={props.featured[2]?.image}
                        />
                      </Link>
                    )}
                  </Col>
                </Row>
              </Col>
              <Col className="feature-5">
                <Row>
                  <Col sm={4}>
                    {props && props.featured && props.featured[3] && (
                      <Link href={props.featured[3]?._id.toString()}>
                        <img
                          className="feature-image"
                          style={{ maxWidth: "140px" }}
                          src={props.featured[3]?.image}
                        />
                      </Link>
                    )}
                  </Col>
                  <Col>
                    <ReturnData data={props.featured[3]} />
                  </Col>
                </Row>
              </Col>
              <Col className="feature-6">
                <Row className="m-0">
                  <Col sm={5}>
                    {" "}
                    <ReturnData data={props.featured[4]} />
                  </Col>
                  <Col>
                    {props && props.featured && props.featured[4] && (
                      <Link href={props.featured[4]?._id.toString()}>
                        <img
                          className="feature-image"
                          style={{ maxWidth: "200px", paddingTop: "30px" }}
                          src={props.featured[4]?.image}
                        />
                      </Link>
                    )}
                  </Col>
                </Row>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </div>
  );
}

export default HomeFeaturedProducts;
