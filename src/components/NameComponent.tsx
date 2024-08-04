import React from "react";

interface nameProps {
  name: string;
}
const NameComponent = ({ name }: nameProps) => {
  console.log("NameComponent rendered");
  return <h1>Showing Result for {name} </h1>;
};

export default React.memo(NameComponent);
