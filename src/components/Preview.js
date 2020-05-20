import React from "react";

const Preview = (props) => {
  return (
    <main className="previewContainer">
      <div className={`bg__${props.bg}`}>
        <span className={`char__${props.char}`} alt={props.char}></span>
        <span className={`item1__${props.item1}`} alt={props.item1}></span>
        <span className={`item2__${props.item2}`} alt={props.item2}></span>
      </div>
    </main>
  );
};

export default Preview;
