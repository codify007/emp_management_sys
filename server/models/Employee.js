const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Emp_Schema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  salary: {
    type: String,
    required: true
  },
  tel:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  details: {
    type:String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Employee', Emp_Schema);