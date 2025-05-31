import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const EmployeeContext = createContext();


export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);


  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/employees/all");
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  
  const addEmployee = async (newEmployee) => {
    try {
      const response = await  axios.post("http://localhost:8000/api/employees/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEmployee),
      });
      if (response.ok) fetchEmployees();
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };


  const updateEmployee = async (updatedEmployee) => {
    try {
      const response = await  axios.put(`http://localhost:8000/api/employees/update/${updatedEmployee.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedEmployee),
      });
      if (response.ok) fetchEmployees();
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };


  const deleteEmployee = async (id) => {
    try {
      const response = await  axios.delete(`http://localhost:8000/api/employees/delete/${id}`, {
        method: "DELETE",
      });
      if (response.ok) fetchEmployees();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <EmployeeContext.Provider value={{ employees, fetchEmployees, addEmployee, updateEmployee, deleteEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};