import React from "react";

const Title = ({ firstText, secondText }) => {
  return (
    <>
      <div className="title">
        <h1>{firstText}</h1>
        <h1>{secondText}</h1>
      </div>
    </>
  );
};

export default Title;
