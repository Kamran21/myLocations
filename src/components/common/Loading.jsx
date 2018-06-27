import React from "react";
import "./loading.css";

const Loading = () => {
  return (
    <div className="spinner">
      <div className="double-bounce1" />
      <div className="double-bounce2" />
    </div>
  );
};

export default Loading;
