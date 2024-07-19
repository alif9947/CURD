import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Beranda from "../pages/Beranda";
import Dhasboard from "../pages/Dhasboard/Dhasboard";

function Index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/dhasboard" element={<Dhasboard />} />
      </Routes>
    </Router>
  );
}

export default Index;
