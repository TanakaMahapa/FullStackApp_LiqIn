const mongoose = require('mongoose');


const EmployeeSchema = new mongoose.Schema({
name: {
     type: String,
     required: true },
surname: { type: String,
     required: true 
    },
gender: { type: String,
     enum: ['Male', 'Female', 'Other'],
     required: true 
    },
department: {
     type: String,
     enum:['Engineering','Marketing','Finances','Information Technology'],
     required: true
     },
salary: { 
    type: Number,
     required: true }
},
 { timestamps: true });


module.exports = mongoose.model('Employee', EmployeeSchema);


