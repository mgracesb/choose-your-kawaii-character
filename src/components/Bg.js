import React from "react";

const Bg = (props) => {
  const selectBg = (evt) => {
    evt.preventDefault();
    props.bgHandler(evt.target.value);
  };
  return (
    <form className="bgForm">
      <select onChange={selectBg}>
        <option>Choose a background</option>
        <option name="bg" value="beach">
          Beach
        </option>
        <option name="bg" value="rainbow">
          Rainbow
        </option>
        <option name="bg" value="techy">
          Techy
        </option>
        <option name="bg" value="mermaid">
          Mermaid
        </option>
        <option name="bg" value="sweetooth">
          Sweetooth
        </option>
        <option name="bg" value="circuit">
          Circuit
        </option>
      </select>
    </form>
  );
};

export default Bg;
