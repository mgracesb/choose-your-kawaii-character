import React from "react";

export const Item1 = (props) => {
  const selectItem1 = (evt) => {
    props.item1Handler(evt.target.value);
  };
  return (
    <form className="item1Form">
      <h2>Item:</h2>
      <label htmlFor="item1" className="item1Label">
        Bunny headband
        <input
          className="radioButton"
          type="radio"
          value="defaultItem"
          name="item1"
          id="item1"
          onChange={selectItem1}
        />
      </label>

      <label htmlFor="item11" className="item1Label">
        Aloha
        <input
          className="radioButton"
          type="radio"
          value="one"
          name="item1"
          id="item11"
          onChange={selectItem1}
        />
      </label>

      <label htmlFor="item12" className="item1Label">
        Kitty
        <input
          className="radioButton"
          type="radio"
          value="two"
          name="item1"
          id="item12"
          onChange={selectItem1}
        />
      </label>

      <label htmlFor="item13" className="item1Label">
        Sleep mask
        <input
          className="radioButton"
          type="radio"
          value="three"
          name="item1"
          id="item13"
          onChange={selectItem1}
        />
      </label>

      <label htmlFor="item14" className="item1Label">
        Crown
        <input
          className="radioButton"
          type="radio"
          value="four"
          name="item1"
          id="item14"
          onChange={selectItem1}
        />
      </label>

      <label htmlFor="item15" className="item1Label">
        Castor
        <input
          className="radioButton"
          type="radio"
          value="five"
          name="item1"
          id="item15"
          onChange={selectItem1}
        />
      </label>
    </form>
  );
};

// export const Item2 = () => {
//   return (
//     <form className="item2Container">
//       <input type="radio" value="one" name="item1" id="" />
//       <label htmlFor="" className="item1Label"></label>
//       <input type="radio" value="one" name="item1" id="" />
//       <label htmlFor="" className="item1Label"></label>
//       <input type="radio" value="one" name="item1" id="" />
//       <label htmlFor="" className="item1Label"></label>
//       <input type="radio" value="one" name="item1" id="" />
//       <label htmlFor="" className="item1Label"></label>
//     </form>
//   );
// };
