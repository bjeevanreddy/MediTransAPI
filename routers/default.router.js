const express = require('express');
const router = express.Router();
const defaultcntrl=require('../controllers/default.cntrl');
router.get('/',defaultcntrl.defaultCheck);
module.exports=router;