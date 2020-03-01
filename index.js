var express = require('express');
var app = express();
require('dotenv').config({path: 'variables.env'});
console.log(process.env.DB_URL);
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
//const node3="mongodb://jeevan:jeevan@jeevan-shard-00-00-9ruiz.mongodb.net:27017,jeevan-shard-00-01-9ruiz.mongodb.net:27017,jeevan-shard-00-02-9ruiz.mongodb.net:27017/Meditrans?ssl=true&replicaSet=jeevan-shard-0&authSource=admin&retryWrites=true&w=majority";
const node2="mongodb+srv://jeevan:jeevan@jeevan-9ruiz.mongodb.net/Meditrans?retryWrites=true&w=majority";
mongoose.connect(node2, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (error, res) => {
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
const host=process.env.HOST || '0.0.0.0';
app.listen(PORT,host, function () {
    console.log(`Server running ${PORT}`);
})