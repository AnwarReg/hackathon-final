import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Note from "./Note";
import Upload from "./Upload";
import "./index.css"

function App() {
  console.log("nigga");
  return (
     <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Note" element={<Note/>} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </div>
    </Router> );
}

export default App;
