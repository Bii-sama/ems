
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

    // Filter bonuses based on isRepeating
    const filteredBonuses = bonuses.filter(aBonus => aBonus.isRepeating);

    // Return the filtered bonuses in the response
    res.status(200).json(filteredBonuses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = getByDate;
