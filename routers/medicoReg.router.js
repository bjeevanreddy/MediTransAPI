const express = require('express');
const router = express.Router();
const medicocntrl=require('../controllers/medicoReg.controller');
router.get('/medicos', medicocntrl.getallmedicos);
router.post('/medicoreg',medicocntrl.addMedicos);
module.exports=router;