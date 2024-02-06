/**
 * Loan.js
 *
 * @description :: TODO: Will be using mongoose to create the schema/structure of the Loan database
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const loanSchema = Schema({
  amount : {
    type: Number,
    required: true
  },

  installment : {
    type: Number,
    required: true
  },

  date : {
    type : Date,
    required: true
  },

  description : {
    type : String,
    default: "N/A"
  },

  unit : {
    type : String,
    enum: ['BAM', '$'],
    default: '$'
  },

  employeeJMBG : {
    type : String,
    required: true
  },

  employee : {
    type : mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  }
}, {timestamps: true})


module.exports = mongoose.model('Loan', loanSchema)