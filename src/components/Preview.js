import React from "react";
// import Character from "./components/Preview";
// import Item1 from "./components/Items";
// import Item2 from "./components/Items";
// import Bg from "./components/Bg";

const Preview = (props) => {
  console.log(props);
  return (
    <div className="previewContainer">
      <div className={props.bg}>
        <img src="" className="character" alt="" />
        <img src="" className="item" alt="" />
      </div>
    </div>
  );
};

export default Preview;
