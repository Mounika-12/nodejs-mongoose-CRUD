const Employee = require('../models/Employee')

const createEmployee = async(req,res) =>{
    try {
        const { name, email, phone } = req.body

        const newEmployee = new Employee({
            name,
            email,
            phone
        }) 
        await newEmployee.save()
        return res.status(201).json(newEmployee)
    } catch(error){
        console.log('error',error)
        return res.status(500).json({message:'Server Error'})
    }
}

const getEmployees = async(req, res) => {
    try {
        const employees = await Employee.find()
        return res.status(200).json(employees)
    } catch(error){
        console.error('Error: ',error)
        return res.status(500).json({message:'Server Error'})
    }
}

const getEmployeeById = async(req, res) => {
    try {
        const employee = await Employee.findById(req.params.id)
        if(!employee){
            return res.status(404).json({message:'Details not found'})
        }
        return res.status(200).json(employee)
    } catch(error){
        console.error('Error: ',error)
        return res.status(500).json({message:'Server Error'})
    }
}

const updateEmployee = async(req,res) =>{
    try {
        const { name, email, phone } = req.body
        const updateEmployee = await Employee.findByIdAndUpdate(
            req.params.id, { name, email, phone }
        )
        if(!updateEmployee){
            return res.status(404).json({message:'Details not found'});
        }
        return res.status(200).json(updateEmployee)
    } catch(error){
        console.log('error',error)
        return res.status(500).json({message:'Server Error'})
    }
}

const deleteEmployee = async(req, res) => {
    try {
        const deleteEmployee = await Employee.findByIdAndDelete(req.params.id)
        return res.status(204).send()
    } catch(error){
        console.error('Error: ',error)
        return res.status(500).json({message:'Server Error'})
    }
}

module.exports = { createEmployee, getEmployees, getEmployeeById, updateEmployee, deleteEmployee }