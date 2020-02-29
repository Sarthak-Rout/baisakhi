var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var expensesSchema = new Schema({
    category: {type: String, required: true},
    expenses:  {type: [Number], default:[]},
  });

  var expenses = mongoose.model('expenses',expensesSchema);
  module.exports = expenses;
