require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');



const PORT = process.env.PORT || 8000;
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/your-db-name';

const app = express();

const employeeRoutes = require('./routes/employeeRoutes');
app.use('/api/employees', employeeRoutes); 


app.use(cors()); 
app.use(express.json());


app.use('/',(req, res) => {
    console.log(`${req.method} ${req.url}`);
    console.log('Request body:', req.body);
    
});


mongoose.connect(DB_URL)

    .then(() => {
        console.log('Successful connection to the database');
        console.log('Database URL:', DB_URL);
    })
    .catch(error => {
        console.error('Database Connection Error:', error);
        process.exit(1);
    });


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});


app.use((req, res) => {
    console.log('404 - Route not found:', req.method, req.url);
    res.status(404).json({ message: 'Route not found' });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});