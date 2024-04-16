
const express = require("express")
const router = express.Router()
const {ContactService} = require("../services/contact.service")
const contactService = new ContactService()
router.get('/',async (req,res,next)=>{
    try {
        const {query:{page,results}} = req
        const messages = await contactService.getAllMessages(results,page*results - results)
        res.json({results:messages,info:{
            results,
            page
        }})
    } catch (error) {
        next(error)
    }
})

module.exports = router