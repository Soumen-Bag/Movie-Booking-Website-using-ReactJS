import React from "react";
import { RotatingLines, TailSpin } from "react-loader-spinner";
import "../Loader/Loader.css";
const Loader = () => {
  return (
    <div className="loader">
      <RotatingLines
        visible={true}
        height="80"
        width="80"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        }}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
