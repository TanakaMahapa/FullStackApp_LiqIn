const express = require('express');
const employeeRoutes = express.Router(); 


const Employee = require('../models/employee');


employeeRoutes.post('/', async (req, res) => {
    console.log('=== POST /add ===');
    console.log('Request body:', req.body);
    
    try {
       
        const requiredFields = ['name', 'surname', 'gender', 'department', 'salary'];
        const missingFields = requiredFields.filter(field => !req.body[field]);
        
        if (missingFields.length > 0) {
            console.log('Missing fields:', missingFields);
            return res.status(400).json({ 
                message: 'Missing required fields', 
                fields: missingFields 
            });
        }

        const newEmployee = new Employee({
            name: req.body.name,
            surname: req.body.surname,
            gender: req.body.gender,
            department: req.body.department,
            salary: req.body.salary
        });

        console.log('Creating new employee:', newEmployee);
        const savedEmployee = await newEmployee.save();
        console.log('Successfully saved employee:', savedEmployee);

        res.status(201).json(savedEmployee);
    } catch (error) {
        console.error('Error saving employee:', error);
        res.status(500).json({ 
            message: 'Error saving employee', 
            error: error.message 
        });
    }
});

employeeRoutes.get('/', async (req, res) => {
    console.log('=== GET /all ===');
    try {
        const employees = await Employee.find();
        console.log(`Found ${employees.length} employees`);
        res.status(200).json(employees);
    } catch (error) {
        console.error('Error fetching employees:', error);
        res.status(500).json({ message: error.message });
    }
});


employeeRoutes.get('/:id', async (req, res) => {
    try {
        const employees = await Employee.find({ department: req.params.department });

        if (employees.length === 0) {
            return res.status(404).json({ message: 'No employees found in this department!' });
        }

        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


employeeRoutes.put('/:id', async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedEmployee) {
            return res.status(404).json({ message: 'Employee not found!' });
        }

        res.status(200).json(updatedEmployee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


employeeRoutes.delete('/:id', async (req, res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);

        if (!deletedEmployee) {
            return res.status(404).json({ message: 'Employee not found!' });
        }

        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = employeeRoutes;