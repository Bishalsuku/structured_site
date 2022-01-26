import React from "react";

const Card = ({ title }) => {
  return (
    <div className="card">
      <p>{title}</p>
      <button>Apply Now</button>
    </div>
  );
};

export default Card;
