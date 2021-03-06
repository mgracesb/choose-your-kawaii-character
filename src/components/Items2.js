import React from "react";

const Item2 = (props) => {
  const selectItem2 = (evt) => {
    props.item2Handler(evt.currentTarget.id);
  };
  return (
    <form className="item2Form">
      <h2>Items 2:</h2>

      <div className="labelContainer" id="defaultItem2" onClick={selectItem2}>
        <label htmlFor="one" className="item2Label">
          Coctail
          <input
            className="radioButton"
            type="radio"
            value="defaultItem2"
            name="item2"
            id="defaultItem2"
            onClick={selectItem2}
          />
        </label>
        <span className="defaultItem-t"></span>
      </div>

      <div className="labelContainer" id="one" onClick={selectItem2}>
        <label htmlFor="one" className="item2Label">
          Beer
          <input
            className="radioButton"
            type="radio"
            value="one"
            name="item2"
            id="one"
            onClick={selectItem2}
          />
        </label>
        <span className="one-t"></span>
      </div>

      <div className="labelContainer" id="two" onClick={selectItem2}>
        <label htmlFor="two" className="item2Label">
          Book
          <input
            className="radioButton"
            type="radio"
            value="two"
            name="item2"
            id="two"
            onClick={selectItem2}
          />
        </label>
        <span className="two-t"></span>
      </div>

      <div className="labelContainer" id="three" onClick={selectItem2}>
        <label htmlFor="three" className="item2Label">
          Paint
          <input
            className="radioButton"
            type="radio"
            value="three"
            name="item2"
            id="three"
            onClick={selectItem2}
          />
        </label>
        <span className="three-t"></span>
      </div>

      <div className="labelContainer" id="four" onClick={selectItem2}>
        <label htmlFor="four" className="item2Label">
          Pop-Corn
          <input
            className="radioButton"
            type="radio"
            value="four"
            name="item2"
            id="four"
            onClick={selectItem2}
          />
        </label>
        <span className="four-t"></span>
      </div>

      <div className="labelContainer" id="five" onClick={selectItem2}>
        <label htmlFor="five" className="item1Label">
          Sword
          <input
            className="radioButton"
            type="radio"
            value="five"
            name="item2"
            id="five"
            onClick={selectItem2}
          />
        </label>
        <span className="five-t"></span>
      </div>

      <div className="labelContainer" id="six" onClick={selectItem2}>
        <label htmlFor="six" className="item2Label">
          Wine
          <input
            className="radioButton"
            type="radio"
            value="six"
            name="item2"
            id="six"
            onClick={selectItem2}
          />
        </label>
        <span className="six-t"></span>
      </div>

      <div className="labelContainer" id="seven" onClick={selectItem2}>
        <label htmlFor="seven" className="item2Label">
          Camera
          <input
            className="radioButton"
            type="radio"
            value="seven"
            name="item2"
            id="seven"
            onClick={selectItem2}
          />
        </label>
        <span className="seven-t"></span>
      </div>

      <div className="labelContainer" id="eight" onClick={selectItem2}>
        <label htmlFor="eight" className="item2Label">
          Mobile
          <input
            className="radioButton"
            type="radio"
            value="eight"
            name="item2"
            id="eight"
            onClick={selectItem2}
          />
        </label>
        <span className="eight-t"></span>
      </div>

      <div className="labelContainer" id="nine" onClick={selectItem2}>
        <label htmlFor="nine" className="item2Label">
          Nurse
          <input
            className="radioButton"
            type="radio"
            value="nine"
            name="item2"
            id="nine"
            onClick={selectItem2}
          />
        </label>
        <span className="nine-t"></span>
      </div>

      <div className="labelContainer" id="ten" onClick={selectItem2}>
        <label htmlFor="ten" className="item2Label">
          Dino
          <input
            className="radioButton"
            type="radio"
            value="ten"
            name="item2"
            id="ten"
            onClick={selectItem2}
          />
        </label>
        <span className="ten-t"></span>
      </div>

      <div className="labelContainer" id="eleven" onClick={selectItem2}>
        <label htmlFor="eleven" className="item2Label">
          Potion
          <input
            className="radioButton"
            type="radio"
            value="eleven"
            name="item2"
            id="eleven"
            onClick={selectItem2}
          />
        </label>
        <span className="eleven-t"></span>
      </div>

      <div className="labelContainer" id="twelve" onClick={selectItem2}>
        <label htmlFor="twelve" className="item2Label">
          Surf
          <input
            className="radioButton"
            type="radio"
            value="twelve"
            name="item2"
            id="twelve"
            onClick={selectItem2}
          />
        </label>
        <span className="twelve-t"></span>
      </div>

      <div className="labelContainer" id="thirteen" onClick={selectItem2}>
        <label htmlFor="thirteen" className="item2Label">
          PC
          <input
            className="radioButton"
            type="radio"
            value="thirteen"
            name="item2"
            id="thirteen"
            onClick={selectItem2}
          />
        </label>
        <span className="thirteen-t"></span>
      </div>

      <div className="labelContainer" id="fourteen" onClick={selectItem2}>
        <label htmlFor="fourteen" className="item2Label">
          Chamaleon
          <input
            className="radioButton"
            type="radio"
            value="fourteen"
            name="item2"
            id="fourteen"
            onClick={selectItem2}
          />
        </label>
        <span className="fourteen-t"></span>
      </div>

      <div className="labelContainer" id="fifteen" onClick={selectItem2}>
        <label htmlFor="fifteen" className="item2Label">
          IceCream
          <input
            className="radioButton"
            type="radio"
            value="fifteen"
            name="item2"
            id="fifteen"
            onClick={selectItem2}
          />
        </label>
        <span className="fifteen-t"></span>
      </div>

      <div className="labelContainer" id="sixteen" onClick={selectItem2}>
        <label htmlFor="sixteen" className="item2Label">
          Plant
          <input
            className="radioButton"
            type="radio"
            value="sixteen"
            name="item2"
            id="sixteen"
            onClick={selectItem2}
          />
        </label>
        <span className="sixteen-t"></span>
      </div>

      <div className="labelContainer" id="seventeen" onClick={selectItem2}>
        <label htmlFor="seventeen" className="item2Label">
          Sing
          <input
            className="radioButton"
            type="radio"
            value="seventeen"
            name="item2"
            id="seventeen"
            onClick={selectItem2}
          />
        </label>
        <span className="seventeen-t"></span>
      </div>
    </form>
  );
};

export default Item2;
