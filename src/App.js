import React from "react";
import CareerSection from "./components/CareerSection.component";
import Header from "./components/Header.component";
import Title from "./components/Title.component";

const App = () => {
  return (
    <>
      <Header />
      <Title
        firstText="Looking For"
        secondText="Motivated And Creative People"
      />
      <CareerSection />
    </>
  );
};

export default App;
