import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { buttonClick } from "../redux/action";
import Page2 from "./Page2";

const Page1 = () => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");

  let value = text;
  let n = number;
  let output = [];
  if (number > 10) {
    setError("Please Enter Less Than 10");
  } else {
    output = value.match(new RegExp(".{1," + n + "}", "g"));
  }

  const dispatch = useDispatch();
  dispatch(buttonClick(output));
  return (
    <div>
      <div>Text Input</div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <div>Number Input</div>
      <input
        type="text"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      ></input>
      {error && <span>{error}</span>}
      <button>
        <Link to="/page2">submit</Link>
      </button>

      <Page2 value={output} />
    </div>
  );
};

export default Page1;
