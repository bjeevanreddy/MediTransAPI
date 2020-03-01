var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const PORT=process.env.PORT||3000;
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));
const mongoose = require('mongoose');
var app = express();
//const defaultcntrl=require('./routers/default.router');
const defaultcntrl=require('./controllers/default.cntrl');
const medicorouter = require('./routers/medicoReg.router');

app.use(bodyParser.json());
app.get('/',defaultcntrl.defaultCheck);
app.use('/api', medicorouter);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/MediTrans', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (error, res) => {
    if (res) {
        console.log('Connected successfully');
    }
    else {
        console.log("Something error occured");
    }
});
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// mongoose.connect('mongodb://localhost:27017/MediTrans', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (error, res) => {
//     if (res) {
//         console.log('DB1 Connected successfully');
//     }
//     else {
//         console.log("Something error occured");
//     }
// });
app.listen(PORT, function () {
    console.log(`Server is starting at ${PORT}`);
})