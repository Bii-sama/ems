/**
 * Penalty.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const penaltySchema = Schema({
  amount : {
    type: Number,
    required: true
  },

  date : {
    type : Date,
    required: true
  },

  description : {
    type : String
  },

  unit : {
    type : String,
    enum: ['BAM', '$'],
    default: '$'
  },

  employeeJMBG : {
    type : String,
    required: true
  }
}, {timestamps: true})


module.exports = mongoose.Model('Penalty', penaltySchema)
