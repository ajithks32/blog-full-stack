import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AddPost from "./pages/AddPost";
import About from "./pages/About";

import "./App.css"

const App = () => {
  return (
    <Router>
      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        <Navbar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-post" element={<AddPost />} />
            <Route path="/about" element={<About />} />
           
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
