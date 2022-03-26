import React from "react";
import Loading from "./Loading";

function Image(props) {
  //loader
  const [loading, setLoading] = React.useState(true);
  const [onLoadClass, setOnLoadClass] = React.useState("");
  const imageLoaded = () => {
    setLoading(false);
    setOnLoadClass("show");
  };

  return (
    <div className="justify-content-center d-flex align-items-center h-100">
      <img
        className={props.className + " " + onLoadClass}
        style={props.style && props.style}
        src={props.src}
        onLoad={imageLoaded}
      />
      {loading && <Loading />}
    </div>
  );
}

export default Image;
