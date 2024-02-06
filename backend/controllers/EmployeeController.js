const Employee = require('../models/Employee')

const mongoose = require('mongoose')


const getAllEmployees = async(req, res) =>{
    const employees = await Employee.find({}).sort({createdAt : -1})

    if(employees.length < 1){
        res.send(204).json({msg : 'The are no employees'})
    }

    res.status(200).json(employees)
}


const getAnEmployee = async (req, res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json("This Employee does not exist")
    }

    const employee = await Employee.findById(id)

    res.status(200).json(employee)
}


const addAnEmployee = async(req, res) => {
    const { firstName, lastName, yearOfEmployment, monthOfEmployment, grossSalary, netSalary, 
    bonus, penalty, loan, loanNote, handover } = req.body

    try {
        const newEmployee = await Employee.create({firstName, lastName, yearOfEmployment, monthOfEmployment, grossSalary, netSalary, 
            bonus, penalty, loan, loanNote, handover})

        res.status(200).json(newEmployee)
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}


const updateAnEmployee = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json("This Employee does not exist")
    }

    try {
        const updatedEmployee = await Employee.findOneAndUpdate({ _id : id}, {...req.body})

        res.status(200).json(updatedEmployee)
    } catch (error) {
        res.status(400).json({ error : error.message})
    }

}


const deleteEmployee = async(req, res) =>{
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json("This Employee does not exist")
    }

    try {
        const employee = await Employee.findByIdAndDelete(id)

        if(!employee){
            return res.status(400).json({
                 error: "This patient does not exist"
             })
         }

         res.status(200).json({msg: "Employee Deleted"})
    
    } catch (error) {
        res.status(400).json({ error : "Unable to delete employee"})
    }
}


module.exports = {
    getAllEmployees,
    getAnEmployee,
    addAnEmployee,
    updateAnEmployee,
    deleteEmployee
}

