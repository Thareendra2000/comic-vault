import React from "react";

const Comic_card = (props) => {
  return (
    <>
      <div className="comic-card">
        <img src={props.imgsrc} alt="" className="comic-cover" />
        <h2 className="comic-title">{props.title}</h2>
      </div>
    </>
  );
};

export default Comic_card;