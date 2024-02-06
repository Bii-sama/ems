const LoanNote = require('../models/LoanNote')
const Employee = require('../models/Employee')
const mongoose = require('mongoose')




const createLoanNote = async (req, res) =>{

 const { id } = req.params

 const employeeWithLoanNote = await Employee.findById(id)

 if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(404).json({err: "Employee is not valid so cannot create loan note"})
 }

 

 try {
    const { date, description, employeeJMBG, employee} = req.body

    employee = employeeWithLoanNote.firstName +  employeeWithLoanNote.lastName
    date = new Date

    const newLoanNote = LoanNote.create({date, description, employeeJMBG, employee})

    res.status(200).json(newLoanNote)

 } catch (error) {
    res.status(400).json({ error: error.message})
 }
 


  

  
}