import React from "react";

const Greet = (props) => {
  const { name, surName } = props;
  return (
    <div>
      <h1>
        {" "}
        Hello {name} {surName}
      </h1>
    </div>
  );
};

export default Greet;
