/**
 * Api.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */


const mongoose = require('mongoose')

const Schema = mongoose.Schema

const apiSchema = new Schema({

  selectedDate : {
    type: Number,
    required: true
  }
  
})

module.exports = mongoose.Model('Api', apiSchema)