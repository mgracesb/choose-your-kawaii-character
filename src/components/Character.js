import React from "react";

const Character = (props) => {
  const selectChar = (evt) => {
    evt.preventDefault();
    props.charHandler(evt.target.value);
  };

  return (
    <form className="characterForm" onChange={selectChar}>
      <label htmlFor="character" className="charLabel">
        <input type="radio" name="character" id="character" value="panda" />
        &nbsp; Panda
      </label>

      <label htmlFor="character" className="charLabel">
        <input type="radio" name="character" value="koala" id="character" />
        &nbsp; Koala
      </label>

      <label htmlFor="character" className="charLabel">
        <input type="radio" name="character" value="bunny" id="character" />
        &nbsp; Bunny
      </label>

      <label htmlFor="character" className="charLabel">
        <input type="radio" name="character" value="lion" id="character" />
        &nbsp; Lion
      </label>

      <label htmlFor="character" className="charLabel">
        <input type="radio" name="character" value="alien" id="character" />
        &nbsp; Alien
      </label>

      <label htmlFor="character" className="charLabel">
        <input type="radio" name="character" value="dog" id="character" />
        &nbsp; Dog
      </label>

      <label htmlFor="character" className="charLabel">
        <input type="radio" name="character" value="death" id="character" />
        &nbsp; Death
      </label>
      <label htmlFor="character" className="charLabel">
        <input type="radio" name="character" value="fish" id="character" />
        &nbsp; Fish
      </label>
    </form>
  );
};
export default Character;
