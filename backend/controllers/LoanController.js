const Loan = require('../models/Loan')
const Employee = require('../models/Employee')


const getLoans = async(req, res) =>{
   const loans = await Loan.find({}).sort({createdAt : -1 })

   if(loans.length < 1){
    res.status(204).json({msg : "There are loans open currently"})
   }

   res.status(200).json(loans)

}


const createLoans = async ( req, res ) =>{

    const { id }  = req.params

    const employeeTakingLoan = await Employee.findById(id)
    
    const { amount, installment, date, description, 
        unit, employeeJMBG, employee} = req.body

    employee = employeeTakingLoan.firstName +  employeeTakingLoan.lastName;

    
try {
        const newLoan = await Loan.create({amount, installment, date, description, 
            unit, employeeJMBG, employee})

            res.status(200).json({msg: "Loan created and added successfully"}, newLoan)
    } catch (error) {
        res.status(400).json({ error: error.message }) 
    }
}


const getAllLoansByDate = async(req, res) => {
     const { month, year } = req.params


  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0);

  try {
    const loans = await Loan.find({
        date: { $gte: startDate, $lte: endDate }
      })

      if(loans.length < 1 ){
        res.status(204).json({msg : "There are no loans this period"})
      }

      res.status(200).json(loans)
  } catch (error) {
    res.ststus(400).json({ error : error.message})
  }

}

module.exports = {
    getLoans,
    createLoans,
    getAllLoansByDate
}