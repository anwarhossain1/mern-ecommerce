import React from "react";

const Index = ({ success }) => {
  return (
    <div>
      <div class="alert alert-success" role="alert">
        {success}
      </div>
    </div>
  );
};

export default Index;
