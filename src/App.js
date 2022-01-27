import React from "react";
import Header from "./components/Header.component";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Careers from "./pages/Careers.page";
import Home from "./pages/Home.page";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/careers" exact element={<Careers />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
