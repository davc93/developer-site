
const express = require("express")
const router = express.Router()
const {ContactService} = require("../services/contact.service")
const contactService = new ContactService()
router.get('/',async (req,res,next)=>{
    try {
        const {query} = req
        const messages = await contactService.getAllMessages(query)
        res.json(messages)
    } catch (error) {
        next(error)
    }
})

module.exports = router