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
          Panda
          <input type="radio" name="character" id="panda" value="panda" />
        </label>
        <span className="panda-s"></span>
      </div>

      <div className="labelContainer" id="koala" onClick={selectChar}>
        <label
          htmlFor="koala"
          className="charLabel"
          id="koala"
          onClick={selectChar}
        >
          Koala
          <input type="radio" name="character" value="koala" id="koala" />
        </label>
        <span className="koala-s"></span>
      </div>

      <div className="labelContainer" id="hamster" onClick={selectChar}>
        <label
          htmlFor="character"
          className="charLabel"
          id="hamster"
          onClick={selectChar}
        >
          Hamster
          <input type="radio" name="character" value="hamster" id="hamster" />
        </label>
        <span className="hamster-s"></span>
      </div>

      <div className="labelContainer" id="bunny" onClick={selectChar}>
        <label
          htmlFor="bunny"
          className="charLabel"
          id="bunny"
          onClick={selectChar}
        >
          Bunny
          <input type="radio" name="character" value="bunny" id="bunny" />
        </label>
        <span className="bunny-s"></span>
      </div>

      <div className="labelContainer" id="lion" onClick={selectChar}>
        <label
          htmlFor="character"
          className="charLabel"
          id="lion"
          onClick={selectChar}
        >
          Lion
          <input type="radio" name="character" value="lion" id="lion" />
        </label>
        <span className="lion-s"></span>
      </div>

      <div className="labelContainer" id="alien" onClick={selectChar}>
        <label
          htmlFor="character"
          className="charLabel"
          id="alien"
          onClick={selectChar}
        >
          Alien
          <input type="radio" name="character" value="alien" id="alien" />
        </label>
        <span className="alien-s"></span>
      </div>

      <div className="labelContainer" id="dog" onClick={selectChar}>
        <label
          htmlFor="character"
          className="charLabel"
          id="dog"
          onClick={selectChar}
        >
          Dog
          <input type="radio" name="character" value="dog" id="dog" />
        </label>
        <span className="dog-s"></span>
      </div>

      <div className="labelContainer" id="death" onClick={selectChar}>
        <label
          htmlFor="character"
          className="charLabel"
          id="death"
          onClick={selectChar}
        >
          Death
          <input type="radio" name="character" value="death" id="death" />
        </label>
        <span className="death-s"></span>
      </div>

      <div className="labelContainer" id="fish" onClick={selectChar}>
        <label
          htmlFor="character"
          className="charLabel"
          id="fish"
          onClick={selectChar}
        >
          Fish
          <input type="radio" name="character" value="fish" id="fish" />
        </label>
        <span className="fish-s"></span>
      </div>
    </form>
  );
};
export default Character;
