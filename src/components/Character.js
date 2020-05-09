import React from "react";

const Character = (props) => {
  const selectChar = (evt) => {
    evt.preventDefault();
    props.charHandler(evt.target.id);
    console.log(evt.target.id);
  };

  return (
    <form className="characterForm">
      <h2>Character:</h2>

      <div className="labelContainer" id="panda" onClick={selectChar}>
        <label
          htmlFor="panda"
          className="charLabel"
          id="panda"
          onClick={selectChar}
        >
          &nbsp; Panda
          <input type="radio" name="character" id="panda" value="panda" />
        </label>
        <span className="panda-s"></span>
      </div>

      <div className="labelContainer" id="koala-s" onClick={selectChar}>
        <label
          htmlFor="koala"
          className="charLabel"
          id="koala"
          onClick={selectChar}
        >
          &nbsp; Koala
          <input type="radio" name="character" value="koala" id="koala" />
        </label>
      </div>

      <div className="labelContainer" id="hamster-s" onClick={selectChar}>
        <label
          htmlFor="character"
          className="charLabel"
          id="hamster"
          onClick={selectChar}
        >
          &nbsp; Hamster
          <input type="radio" name="character" value="hamster" id="hamster" />
        </label>
      </div>

      <label
        htmlFor="bunny"
        className="charLabel"
        id="bunny"
        onClick={selectChar}
      >
        &nbsp; Bunny
        <input type="radio" name="character" value="bunny" id="bunny" />
      </label>

      <label
        htmlFor="character"
        className="charLabel"
        id="lion"
        onClick={selectChar}
      >
        &nbsp; Lion
        <input type="radio" name="character" value="lion" id="lion" />
      </label>

      <label
        htmlFor="character"
        className="charLabel"
        id="alien"
        onClick={selectChar}
      >
        &nbsp; Alien
        <input type="radio" name="character" value="alien" id="alien" />
      </label>

      <label
        htmlFor="character"
        className="charLabel"
        id="dog"
        onClick={selectChar}
      >
        &nbsp; Dog
        <input type="radio" name="character" value="dog" id="dog" />
      </label>

      <label
        htmlFor="character"
        className="charLabel"
        id="death"
        onClick={selectChar}
      >
        &nbsp; Death
        <input type="radio" name="character" value="death" id="death" />
      </label>

      <label
        htmlFor="character"
        className="charLabel"
        id="fish"
        onClick={selectChar}
      >
        &nbsp; Fish
        <input type="radio" name="character" value="fish" id="fish" />
      </label>
    </form>
  );
};
export default Character;
