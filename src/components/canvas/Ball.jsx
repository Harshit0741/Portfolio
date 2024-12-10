import React from "react";

const BallCanvas = ({ icon }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10vh" }}>
      <img
        src={icon}
        alt="Static Ball"
        style={{ width: "150px", height: "150px", objectFit: "contain" }}
      />
    </div>
  );
};

export default BallCanvas;
