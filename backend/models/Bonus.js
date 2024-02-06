/**
 * Bonus.js
 *
 * @description :: TODO: Will be using mongoose to create the schema/structure of the Bonus database
 * @docs        :: https://www.mongodb.com/docs/drivers/node/current/
 */

const mongoose = require('mongoose')

const Schema = mongoose.Schema


const bonusSchema = new Schema({

  amount : {
    type: Number,
    required : true
  },

  date : {
    type: Date,
    required: true
  },

  description : {
    type : String
  },

  isRepeating : {
    type : Boolean,
    required: true
  },

  employeeJMBG  : {
    type: Boolean,
    required: true
  },

  employee : {
    type : mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  }


}, {timestamps: true})

module.exports = mongoose.model("Bonus", bonusSchema)