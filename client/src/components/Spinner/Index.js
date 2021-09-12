import React from "react";

const Index = () => {
  return (
    <div>
      <div
        className="spinner-border text-success mt-5"
        role="status"
        style={{ width: "100px", height: "100px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Index;
