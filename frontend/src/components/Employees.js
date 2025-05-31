import React, { useContext, useState } from "react";
import { EmployeeContext } from "./EmployeeContext";
import "./Employees.css";


function Employees() {
  const { employees, addEmployee, updateEmployee, deleteEmployee } = useContext(EmployeeContext);
  const [newEmployee, setNewEmployee] = useState({ name: "", surname: "", gender: "", department: "", salary: "" });
  

  return (
    <div>
      <h2>All Employees</h2>

     
      <div className="form-container">
        <input type="text" placeholder="Name" value={newEmployee.name} onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })} />
        <input type="text" placeholder="Surname" value={newEmployee.surname} onChange={(e) => setNewEmployee({ ...newEmployee, surname: e.target.value })} />
        <input type="text" placeholder="Gender" value={newEmployee.gender} onChange={(e) => setNewEmployee({ ...newEmployee, gender: e.target.value })} />
        <input type="text" placeholder="Department" value={newEmployee.department} onChange={(e) => setNewEmployee({ ...newEmployee, department: e.target.value })} />
        <input type="number" placeholder="Salary" value={newEmployee.salary} onChange={(e) => setNewEmployee({ ...newEmployee, salary: e.target.value })} />
        <button onClick={() => addEmployee(newEmployee)}>Add Employee</button>
      </div>

    
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.surname}</td>
              <td>{employee.gender}</td>
              <td>{employee.department}</td>
              <td>{employee.salary}</td>
              <td>
                <button className="update-btn" onClick={() => updateEmployee(employee)}>Update</button>
                <button className="delete-btn" onClick={() => deleteEmployee(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;