const mongoose = require('mongoose');
// mongoose.set('useFindAndModify', false);
const medicoschema = mongoose.Schema({
    shopname:String,
    userid:String,
    password:String,
    ownername:String,
    mobile: { type: String, unique: true },
    email: { type: String, unique: true },
    address: String,
    city:String,
    timing:String,
    doordelivery:String
});
const medicomodel = mongoose.model('medicodb', medicoschema);
module.exports = medicomodel;