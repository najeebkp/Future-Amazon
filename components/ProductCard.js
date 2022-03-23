import React from "react";
import { Star } from "@styled-icons/bootstrap/Star";
import { StarFill } from "@styled-icons/bootstrap/StarFill";
import Link from "next/link";

function ProductCard(props) {
  // rating

  const Rating = ({ star }) => {
    return (
      <>
        <FilledStar star={star} />
        <UnfilledStar star={star} />
      </>
    );
  };
  const FilledStar = ({ star }) => {
    return [...Array(star)].map((e, i) => (
      <>
        <StarFill size={15} color={"#FFA41C"} />
      </>
    ));
  };
  const UnfilledStar = ({ star }) => {
    return [...Array(5 - star)].map((e, i) => (
      <>
        <Star size={15} color={"#FFA41C"} />
      </>
    ));
  };
  return (
    <Link href={props.item.id.toString()}>
      <div className="product-card-wrapper">
        <div className="product-card-image">
          <img src={props.item.image}></img>
        </div>
        <div className="normal-font">
          {props.item.fname + " " + props.item.lname}
        </div>
        <div className="pt-1 disabled-color small-font mb-1">
          {props.item.seller}
        </div>
        <div className="d-flex">
          <Rating star={props.item.rating.star} />
          &ensp;
          <div className="small-font" style={{ color: "blue" }}>
            {props.item.rating.total}
          </div>
        </div>
        <div
          className="d-flex align-items-top bold mt-2"
          style={{ gap: "1px" }}
        >
          <span style={{ marginTop: "5px", fontSize: "10px" }}>$</span>
          <span className="font-size-small">
            {props.item.price.toString().split(".")[0]}
          </span>
          <span style={{ marginTop: "2px", fontSize: "10px" }}>
            {props.item.price.toString().split(".")[1]}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
