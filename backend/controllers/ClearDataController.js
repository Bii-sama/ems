const getIds = require('../services/ClearDataServices')
const Sr = require('../models/SalaryRaise')
const Bonus = require('../models/Bonus')
const Loan = require('../models/Loan')
const LoanNote = require('../models/LoanNote')
const Penalty = require('../models/Penalty')
const LoanPayment = require('../models/LoanPayment')
const Api = require('../models/Api')


const removeSalaryRaise = async (req, res) => {
  try {
    const { params } = req.params;


    const salaryRaiseEntries = await Sr.find()

    // Get salary raise IDs based on conditions
    const salaryRaiseIds = getIds(salaryRaiseEntries, params, false);

    // Delete salary raise entries by IDs
    const result = await Sr.deleteMany({ _id: { $in: salaryRaiseIds } });

    // Check if any entries were deleted
    if (result.length > 0) {
      res.status(200).json({ success: true, message: 'Salary raise entries deleted successfully' });
    } else {
      res.status(404).json({ success: false, message: 'No matching salary raise entries found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};


const removePenalty = async ( req, res ) =>{
   const { params } = req.params

   const penaltyEntries = await Penalty.find()

   try {
    const penaltyIds = getIds(penaltyEntries, params, false)

   const result = penaltyEntries.deleteMany({ _id: { $in: penaltyIds } })

   if (result.length > 0) {
    res.status(200).json({ success: true, message: 'Penalty entries deleted successfully' });
  } else {
    res.status(404).json({ success: false, message: 'No matching Penalty entries found' });
  }
   } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
   }
}


const removeBonus = async ( req, res ) =>{
     const { params } = req.params

     const bonusEntries = await Bonus.find()

     try {
      const bonusIds = getIds(bonusEntries, params, false)

      const result = bonusEntries.deleteMany({_id: {$in: bonusIds}})

      if (result.length > 0) {
        res.status(200).json({ success: true, message: 'Bonus entries deleted successfully' });
      } else {
        res.status(404).json({ success: false, message: 'No matching bonus entries found' });
      }
     } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
     }

}


const removeLoan = async ( req, res ) =>{
      const { params } = req.params

      const loanEntries = await Loan.find()

      try {
        const loanIds = getIds(loanEntries, params, false)

        const result = loanEntries.deleteMany({ _id: {$in : loanIds} })
        if (result.length > 0) {
          res.status(200).json({ success: true, message: 'Loan entries deleted successfully' });
        } else {
          res.status(404).json({ success: false, message: 'No matching loan entries found' });
        }
        
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
      }
}


const removeLoanNotes = async ( req, res ) =>{

  const { params } = req.params

  const loanNoteEntries = await LoanNote.find()

  try {

    const loanNoteIDs = getIds(loanNoteEntries, params, false)

    const result = loanNoteEntries.deleteMany({_id : {$in : loanNoteIDs}})

    if (result.length > 0) {
      res.status(200).json({ success: true, message: 'Loan-Note entries deleted successfully' });
    } else {
      res.status(404).json({ success: false, message: 'No matching loan-note entries found' });
    }
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }

}


const removeLoanPayment = async ( req, res ) =>{

  const { params } = req.params

  const loanPaymentEntries = await LoanPayment.find()

  try {

    const loanPaymentIDs = getIds(loanPaymentEntries, params, false)

    const result = loanPaymentEntries.deleteMany({_id : {$in : loanPaymentIDs}})

    if (result.length > 0) {
      res.status(200).json({ success: true, message: 'Loan-Note entries deleted successfully' });
    } else {
      res.status(404).json({ success: false, message: 'No matching loan-note entries found' });
    }
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }

}

const removeApi = async ( req, res ) =>{

  const { params } = req.params

  const ApiEntries = await Api.find()

  try {

    const ApiIDs = getIds(ApiEntries, params, false)

    const result = ApiEntries.deleteMany({_id : {$in : ApiIDs}})

    if (result.length > 0) {
      res.status(200).json({ success: true, message: 'Loan-Note entries deleted successfully' });
    } else {
      res.status(404).json({ success: false, message: 'No matching loan-note entries found' });
    }
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }

}



module.exports = {removeSalaryRaise, removePenalty, removeBonus, removeLoan, removeLoanNotes, removeLoanPayment, removeApi}
