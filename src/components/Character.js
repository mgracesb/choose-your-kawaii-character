import React from "react";

const Character = (props) => {
  const selectChar = (evt) => {
    evt.preventDefault();
    props.charHandler(evt.target.value);
  };

  return (
    <form className="characterForm">
      <h2>Character:</h2>
      <input
        type="radio"
        name="character"
        id="character"
        value="panda"
        onClick={selectChar}
      />
      <label htmlFor="character" className="charLabel">
        &nbsp; Panda
      </label>

      <input
        type="radio"
        name="character"
        value="koala"
        id="character"
        onClick={selectChar}
      />
      <label htmlFor="character" className="charLabel">
        &nbsp; Koala
      </label>

      <input
        type="radio"
        name="character"
        value="hamster"
        id="character"
        onClick={selectChar}
      />
      <label htmlFor="character" className="charLabel">
        &nbsp; Hamster
      </label>

      <input
        type="radio"
        name="character"
        value="bunny"
        id="character"
        onClick={selectChar}
      />
      <label htmlFor="character" className="charLabel">
        &nbsp; Bunny
      </label>

      <input
        type="radio"
        name="character"
        value="lion"
        id="character"
        onClick={selectChar}
      />
      <label htmlFor="character" className="charLabel">
        &nbsp; Lion
      </label>

      <input
        type="radio"
        name="character"
        value="alien"
        id="character"
        onClick={selectChar}
      />
      <label htmlFor="character" className="charLabel">
        &nbsp; Alien
      </label>

      <input
        type="radio"
        name="character"
        value="dog"
        id="character"
        onClick={selectChar}
      />
      <label htmlFor="character" className="charLabel">
        &nbsp; Dog
      </label>

      <input
        type="radio"
        name="character"
        value="death"
        id="character"
        onClick={selectChar}
      />
      <label htmlFor="character" className="charLabel">
        &nbsp; Death
      </label>

      <input
        type="radio"
        name="character"
        value="fish"
        id="character"
        onClick={selectChar}
      />
      <label htmlFor="character" className="charLabel">
        &nbsp; Fish
      </label>
    </form>
  );
};
export default Character;
