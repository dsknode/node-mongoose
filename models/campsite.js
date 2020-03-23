const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// two parameters
// first is an object with definition of schema
// second optional argument, used for setting config options
// timestamp = true, causes mongosse to add 2 properties: created at and updated at
// mongoose will manage these two for you
const campsiteSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// create model using schema
// creates model name campsite, 
/* first arg is capitalized nad signualr version of the
 collection we wnat to use fo rthis model*/
const Campsite = mongoose.model('Campsite', campsiteSchema);

module.exports = Campsite;