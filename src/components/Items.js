import React from "react";

export const Item1 = (props) => {
  const selectItem1 = (evt) => {
    props.item1Handler(evt.target.value);
  };
  return (
    <form className="item1Form">
      <h2>Item:</h2>
      <input
        type="radio"
        value="defaultItem"
        name="item1"
        id="item1"
        onChange={selectItem1}
      />
      <label htmlFor="item1" className="item1Label">
        Kitty headband
      </label>
      <input type="radio" value="one" name="item1" id="item11" />
      <label htmlFor="item11" className="item1Label">
        ?
      </label>
      <input type="radio" value="two" name="item1" id="item12" />
      <label htmlFor="item12" className="item1Label">
        ?
      </label>
      <input type="radio" value="three" name="item1" id="item13" />
      <label htmlFor="item13" className="item1Label">
        ?
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
