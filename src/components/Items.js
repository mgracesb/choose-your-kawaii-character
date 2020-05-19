import React from "react";

const Item1 = (props) => {
  const selectItem1 = (evt) => {
    props.item1Handler(evt.currentTarget.id);
  };
  return (
    <form className="item1Form">
      <h2>Items 1:</h2>

      <div className="labelContainer" id="defaultItem" onClick={selectItem1}>
        <label htmlFor="defaultItem" className="item1Label">
          Aloha
          <input
            className="radioButton"
            type="radio"
            value="defaultItem"
            name="item1"
            id="defaultItem"
            onClick={selectItem1}
          />
        </label>
        <span className="one-s"></span>
      </div>

      <div className="labelContainer" id="one" onClick={selectItem1}>
        <label htmlFor="one" className="item1Label">
          Bunny ears
          <input
            className="radioButton"
            type="radio"
            value="one"
            name="item1"
            id="one"
            onClick={selectItem1}
          />
        </label>
        <span className="one-s"></span>
      </div>

      <div className="labelContainer" id="two" onClick={selectItem1}>
        <label htmlFor="two" className="item1Label">
          Carnival
          <input
            className="radioButton"
            type="radio"
            value="two"
            name="item1"
            id="two"
            onClick={selectItem1}
          />
        </label>
        <span className="two-s"></span>
      </div>

      <div className="labelContainer" id="three" onClick={selectItem1}>
        <label htmlFor="three" className="item1Label">
          Castor
          <input
            className="radioButton"
            type="radio"
            value="three"
            name="item1"
            id="three"
            onClick={selectItem1}
          />
        </label>
        <span className="three-s"></span>
      </div>

      <div className="labelContainer" id="four" onClick={selectItem1}>
        <label htmlFor="four" className="item1Label">
          Crown
          <input
            className="radioButton"
            type="radio"
            value="four"
            name="item1"
            id="four"
            onClick={selectItem1}
          />
        </label>
        <span className="four-s"></span>
      </div>

      <div className="labelContainer" id="five" onClick={selectItem1}>
        <label htmlFor="five" className="item1Label">
          Mortarboard
          <input
            className="radioButton"
            type="radio"
            value="five"
            name="item1"
            id="five"
            onClick={selectItem1}
          />
        </label>
        <span className="five-s"></span>
      </div>

      <div className="labelContainer" id="three" onClick={selectItem1}>
        <label htmlFor="three" className="item1Label">
          Sleeping mask
          <input
            className="radioButton"
            type="radio"
            value="three"
            name="item1"
            id="three"
            onClick={selectItem1}
          />
        </label>
        <span className="three-s"></span>
      </div>

      <div className="labelContainer" id="six" onClick={selectItem1}>
        <label htmlFor="six" className="item1Label">
          Snorkel
          <input
            className="radioButton"
            type="radio"
            value="six"
            name="item1"
            id="six"
            onClick={selectItem1}
          />
        </label>
        <span className="six-s"></span>
      </div>
    </form>
  );
};

export default Item1;
