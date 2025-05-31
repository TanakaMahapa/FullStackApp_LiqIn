import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Employees from "./components/Employees";
import Department from "./components/Department";
import EmployeeCardPage from "./components/EmployeeCardPage";
import { EmployeeProvider } from "./components/EmployeeContext"; 
import "./App.css";

function App() {
  return (
    <EmployeeProvider> 
      <Router>
        <div className="app-container">
          <nav className="main-nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/employees">All Employees</Link></li>
              <li><Link to="/department/engineering">Engineering</Link></li>
              <li><Link to="/department/marketing">Marketing</Link></li>
              <li><Link to="/department/finance">Finance</Link></li>
              <li><Link to="/employee-card">Employee Card</Link></li>
            </ul>
          </nav>
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/department/:departmentName" element={<Department />} />
              <Route path="/employee-card" element={<EmployeeCardPage />} /> 
            </Routes>
          </main>
        </div>
      </Router>
    </EmployeeProvider>
  );
}

export default App;