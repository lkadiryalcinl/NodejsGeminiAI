const express=require('express')
const router=express.Router()
const AIController = require('../controllers/AI');
const { verifyToken } = require('../middleware/VerifyToken')

router
    .post("/generate",verifyToken, AIController.generateContent);

module.exports = router