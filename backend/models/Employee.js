const mongoose = require('mongoose')

const Schema = mongoose.Schema

const employeeSchema = new Schema({
    firstName : {
        type: String,
        required: true
    },

    lastName : {
        type : String,
        required: true
    },

    yearOfEmployment : {
        type : Date,
        required: true
    },

    monthOfEmployment : {
        type : Date,
        required: true
    },

    grossSalary : {
        type : Number,
        required: true
    },

    netSalary : {
        type : Number,
        required: true
    },

    bonus : {
        type : Number,
        required : true,
        default : 0
    },

    penalty : {
        type : Number,
        required : true,
        default : 0
    },

    loan : {
        type : Number,
        required : true,
        default : 0
    },

    loanNote : {
        type : String,
        required : true,
        default : ""
    },

    handOver : {
        type : Number,
        required : true
    }


})

module.exports = mongoose.model("Employee", employeeSchema)