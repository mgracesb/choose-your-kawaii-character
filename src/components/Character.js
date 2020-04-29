import React from "react";

const Character = (props) => {
  const selectChar = (evt) => {
    evt.preventDefault();
    props.charHandler(evt.target.value);
  };

  return (
    <form className="characterForm" onChange={selectChar}>
      <label className="charLabel">
        <input type="radio" name="character" value="panda" />
        Panda
      </label>
      <label className="charLabel">
        <input type="radio" name="character" value="koala" />
        Koala
      </label>
      <label className="charLabel">
        <input type="radio" name="character" value="bunny" />
        Bunny
      </label>
      <label className="charLabel">
        <input type="radio" name="character" value="lion" />
        Lion
      </label>
      <label className="charLabel">
        <input type="radio" name="character" value="alien" />
        Alien
      </label>
      <label className="charLabel">
        <input type="radio" name="character" value="dog" />
        Dog
      </label>
      <label className="charLabel">
        <input type="radio" name="character" value="death" />
        Death
      </label>
      <label className="charLabel">
        <input type="radio" name="character" value="fish" />
        Fish
      </label>
    </form>
  );
};
export default Character;
