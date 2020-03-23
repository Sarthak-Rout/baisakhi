var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var stallSchema = new Schema({
    nameEvent: {type: String, default: 'sarthak'},
    nameParty:  {type: String, default: 'sarthak enterprisers'},
    stallType:  {type: String, default: 'food'},
    stallNo: {type: Number, default:0},
    rate: {type: Number},
    booked: {type : Date, default: Date.now },
    paid: {type: [Number]}
  });

  var stall = mongoose.model('stalls',stallSchema);
  module.exports = stall;
