const express = require('express');
const router = express.Router()
const employeeController = require('../controllers/employeeController');
const { MongoBatchReExecutionError } = require('mongodb');


router.get('/get',employeeController.getEmployees);
router.get('/get/:id',employeeController.getEmployeeById);
router.post('/create',employeeController.createEmployee);
router.put('/update/:id',employeeController.updateEmployee);
router.delete('/delete/:id',employeeController.deleteEmployee);

module.exports =  router 