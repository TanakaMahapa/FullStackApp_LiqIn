import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { EmployeeContext } from "./EmployeeContext";
import "./Department.css";


function Department() {
  const { departmentName } = useParams();
  const { employees } = useContext(EmployeeContext);

 
  const filteredEmployees = employees.filter(
    (employee) => employee.department.toLowerCase() === departmentName.toLowerCase()
  );

  return (
    <div>
      <h2>Employees in {departmentName} Department</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.surname}</td>
              <td>{employee.gender}</td>
              <td>{employee.department}</td>
              <td>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Department;