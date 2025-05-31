import React, { useContext } from "react";
import { EmployeeContext } from "./EmployeeContext";
import "./EmployeeCardPage.css"; 
import icon from "../components/profile.png"; 


function EmployeeCardPage() {
  const { employees } = useContext(EmployeeContext);

  return (
    <div className="cards-container">
      {employees.map((employee) => (
        <div key={employee.id} className="employee-card">
          <div className="card-header">EMPLOYEE DATA</div> 
          <div className="profile-icon"> 
            <img src={icon} alt="Profile Icon" /> 
          </div>
          <div className="card-content">
            <p><strong>ID:</strong> {employee.id}</p>
            <p><strong>Name:</strong> {employee.name} {employee.surname}</p>
            <p><strong>Gender:</strong> {employee.gender}</p>
            <p><strong>Department:</strong> {employee.department}</p>
            <p><strong>Salary:</strong> R{employee.salary}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EmployeeCardPage;