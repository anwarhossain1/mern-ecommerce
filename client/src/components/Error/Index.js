import React from "react";

const Index = ({ error }) => {
  return (
    <div class="alert alert-danger" role="alert">
      {error}
    </div>
  );
};

export default Index;
