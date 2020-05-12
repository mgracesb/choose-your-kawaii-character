import React from "react";
const Item2 = (props) => {
  const selectItem2 = (evt) => {
    props.item1Handler(evt.target.value);
  };
  return (
    <form className="item2Form">
      <h2>Item:</h2>

      <div className="labelContainer" id="monkey" onChange={selectItem2}>
        <label htmlFor="item2" className="item1Label">
          Bunny ears
          <input
            className="radioButton"
            type="radio"
            value="defaultItem"
            name="item2"
            id="item2"
            onChange={selectItem2}
          />
        </label>{" "}
        <span className="lion-s"></span>{" "}
      </div>

      <div className="labelContainer" id="monkey" onChange={selectItem2}>
        <label htmlFor="item11" className="item1Label">
          Aloha
          <input
            className="radioButton"
            type="radio"
            value="one"
            name="item2"
            id="item11"
            onChange={selectItem2}
          />
        </label>{" "}
        <span className="lion-s"></span>
      </div>

      <div className="labelContainer" id="monkey" onChange={selectItem2}>
        <label htmlFor="item12" className="item1Label">
          Kitty ears
          <input
            className="radioButton"
            type="radio"
            value="two"
            name="item2"
            id="item12"
            onChange={selectItem2}
          />
        </label>{" "}
        <span className="lion-s"></span>
      </div>

      <div className="labelContainer" id="monkey" onChange={selectItem2}>
        <label htmlFor="item13" className="item1Label">
          Sleeping mask
          <input
            className="radioButton"
            type="radio"
            value="three"
            name="item2"
            id="item13"
            onChange={selectItem2}
          />
        </label>{" "}
        <span className="lion-s"></span>
      </div>

      <div className="labelContainer" id="monkey" onChange={selectItem2}>
        <label htmlFor="item14" className="item1Label">
          Crown
          <input
            className="radioButton"
            type="radio"
            value="four"
            name="item2"
            id="item14"
            onChange={selectItem2}
          />
        </label>
        <span className="lion-s"></span>
      </div>

      <div className="labelContainer" id="monkey" onChange={selectItem2}>
        <label htmlFor="item15" className="item1Label">
          Castor
          <input
            className="radioButton"
            type="radio"
            value="five"
            name="item2"
            id="item15"
            onChange={selectItem2}
          />
        </label>
        <span className="lion-s"></span>
      </div>

      <div className="labelContainer" id="monkey" onChange={selectItem2}>
        <label htmlFor="item16" className="item1Label">
          Snorkel
          <input
            className="radioButton"
            type="radio"
            value="six"
            name="item2"
            id="item16"
            onChange={selectItem2}
          />
        </label>
        <span className="lion-s"></span>
      </div>

      <div className="labelContainer" id="monkey" onChange={selectItem2}>
        <label htmlFor="item16" className="item1Label">
          Snorkel
          <input
            className="radioButton"
            type="radio"
            value="six"
            name="item2"
            id="item16"
            onChange={selectItem2}
          />
        </label>
        <span className="lion-s"></span>
      </div>

      <div className="labelContainer" id="monkey" onChange={selectItem2}>
        <label htmlFor="item16" className="item1Label">
          Snorkel
          <input
            className="radioButton"
            type="radio"
            value="six"
            name="item2"
            id="item16"
            onChange={selectItem2}
          />
        </label>
        <span className="lion-s"></span>
      </div>

      <div className="labelContainer" id="monkey" onChange={selectItem2}>
        <label htmlFor="item16" className="item1Label">
          Snorkel
          <input
            className="radioButton"
            type="radio"
            value="six"
            name="item2"
            id="item16"
            onChange={selectItem2}
          />
        </label>
        <span className="lion-s"></span>
      </div>
      <div className="labelContainer" id="monkey" onChange={selectItem2}>
        <label htmlFor="item16" className="item1Label">
          Snorkel
          <input
            className="radioButton"
            type="radio"
            value="six"
            name="item2"
            id="item16"
            onChange={selectItem2}
          />
        </label>
        <span className="lion-s"></span>
      </div>

      <div className="labelContainer" id="monkey" onChange={selectItem2}>
        <label htmlFor="item16" className="item1Label">
          Snorkel
          <input
            className="radioButton"
            type="radio"
            value="six"
            name="item2"
            id="item16"
            onChange={selectItem2}
          />
        </label>
        <span className="lion-s"></span>
      </div>

      <div className="labelContainer" id="monkey" onChange={selectItem2}>
        <label htmlFor="item16" className="item1Label">
          Snorkel
          <input
            className="radioButton"
            type="radio"
            value="six"
            name="item2"
            id="item16"
            onChange={selectItem2}
          />
        </label>
        <span className="lion-s"></span>
      </div>
    </form>
  );
};

export default Item2;
