var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const PORT=process.env.PORT||3000;
var distDir = __dirname + "/dist/";
 app.use(express.static(distDir));
const mongoose = require('mongoose');
var app = express();
const defaultcntrl=require('./controllers/default.cntrl');
const medicorouter = require('./routers/medicoReg.router');
app.use(bodyParser.json());
app.get('/',defaultcntrl.defaultCheck);
app.use('/api', medicorouter);

mongoose.connect('mongodb://jeevan:jeevan@jeevan-shard-00-00-9ruiz.mongodb.net:27017,jeevan-shard-00-01-9ruiz.mongodb.net:27017,jeevan-shard-00-02-9ruiz.mongodb.net:27017/Meditrans?ssl=true&replicaSet=jeevan-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (error, res) => {
    if (res) {
        console.log('Connected successfully');
    }
    else {
        console.log("Something error occured");
    }
});
// mongoose.connect('mongodb://localhost:27017/MediTrans', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (error, res) => {
//     if (res) {
//         console.log('DB1 Connected successfully');
//     }
//     else {
//         console.log("Something error occured");
//     }
// });
app.listen(PORT, function () {
    console.log('Server running');
})