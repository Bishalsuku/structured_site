import React, { useState } from "react";
import Card from "./CareerCard.component";
import Heading from "./Heading.component";

const CareerSection = () => {
  const careers = useState([
    {
      id: 1,
      title: "React Native Developer",
    },
    {
      id: 2,
      title: "Logo Designer",
    },
    {
      id: 3,
      title: "NodeJS Developer (Intern)",
    },
    {
      id: 4,
      title: "Content Writer",
    },
  ]);
  console.log(careers);
  return (
    <>
      <div className="careerSection">
        <Heading title="Career" />
        <div className="careerContainer">
          {careers[0].map((career) => (
            <Card title={`${career.title}`} key={career.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CareerSection;
