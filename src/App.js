import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Register from "./Register";
import Products from "./products";


function App() {
  return (
      <Router>
        <div style={{ padding: 20 }}>
          <h2>React + Django CRUD App</h2>
          <Link to="/register"><button>Click Me to Register !!</button></Link>

          <Link to="/products"><button>Click Me to Add Product !!</button></Link>
          <Routes>
            <Route path="/products" element={<Products/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
        </div>
      </Router>
  );

}

export default App;