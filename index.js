var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const PORT=process.env.PORT||3000;
var distDir = __dirname + "/dist/";
 app.use(express.static(distDir));
//const trueLog = require('true-log');
//const fs = require('fs');
//const readline = require('readline');
//const path = require('path');
const mongoose = require('mongoose');
var app = express();
const defaultcntrl=require('./routers/default.router');
const medicorouter = require('./routers/medicoReg.router');
//const privaterouter = require('./routers/privaterouters');
//const jobsrouter = require('./routers/jobs.router');
//const authorization = require('./middlewares/middle');
// var cors= require('cors');
// app.use(cors({
//     origin:['http://localhost:4200','http://127.0.0.1:4200'],
//     credentials:true
//   }));
  
// var cors = require('cors');
// var whitelist = [
//     'http://localhost:4200'
// ];

// var corsOptions = {
//     credentials: true,
//     origin: function(origin, callback) {
//         var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
//         callback(null, originIsWhitelisted);
//     },
//     methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE'],
//     allowedHeaders: 'accept, content-type,Authorization'
// };
// app.use(cors({
//     'allowedHeaders': ['sessionId', 'Content-Type'],
//     'exposedHeaders': ['sessionId'],
//     'origin': '*',
//     'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     'preflightContinue': false
//   }));
//app.use(cors(corsOptions));
//app.use(express.static('uploads/'));
//app.use(bodyParser.json());
//const ws = fs.createWriteStream(path.join(__dirname, "log.txt"), { flags: 'a' });
//app.use(trueLog({ level: 'full', stream: ws }));
app.use(bodyParser.json());
app.use('/api',defaultcntrl);
app.use('/api', medicorouter);
//app.use(authorization.jwtAuth);
//app.use('/private', privaterouter);
//app.use('/jobs', jobsrouter);


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


// const arraylog=[];
// var input=null;
// const reader=readline.createInterface({input:
//     fs.createReadStream(__dirname+'/log.txt')});
// reader.on('line',line =>{
//     arraylog.push(JSON.parse(line));
// });
// reader.on('close',d=>{
//     arraylog.push(e=>console.log(e.action));
// })
// fs.readFile('log.txt', function(err, buf) {
//     const a = buf.toString();
//     let serachers=0;
//     const arraylog=[];
//     const b = a.split('}');
//     for(let i = 0; i < b.length; i++){
//         // if(b[i].url===""/public/addrecruiter"")
//         // {
//         //     serachers++;
//         // }
//         arraylog.push(JSON.parse(b[i]));
//     }
//     console.log(arraylog);
// })

app.listen(PORT, function () {
    console.log('Server running');
})