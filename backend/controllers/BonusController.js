
const Bonus = require('../models/Bonus')
const mongoose = require('mongoose')


const getByDate = async (req, res) => {
    const { month, year } = req.params;
  
    const startDate = new Date(year, month - 1, 1); 
    const endDate = new Date(year, month, 0);
  
    try {
      const bonuses = await Bonus.find({
        date: { $gte: startDate, $lte: endDate }
      });
  
      res.status(200).json(bonuses);
    } catch (error) {

      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

  module.exports = getByDate;