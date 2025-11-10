import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./MyPages/Home";

const App = () => (
  <>
  <Router>
     <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
      </Router>
  </>
);
export default App;
