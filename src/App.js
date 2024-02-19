import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import About from "./routes/About";
import Home from "./routes/Home";
import Projects from "./routes/Projects";


function App() {
  return (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </>
  )
}

export default App;
