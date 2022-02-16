import React from "react";
import { useSelector } from "react-redux";

const Page2 = ({ value }) => {
  //   const { value } = useSelector((state) => state);
  return (
    <div>
      {value.map((e) => (
        <div>{e}</div>
      ))}
    </div>
  );
};

export default Page2;
