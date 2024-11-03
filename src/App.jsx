// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import MainNote from "./MainNote"; // updated casing
import Upload from "./Upload";
import "./index.css"
import Footer from "./footer"
import Login from "./Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/note/:id" element={<MainNote />} /> // updated casing
          <Route path="/upload" element={<Upload />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;