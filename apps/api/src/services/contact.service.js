const {models} = require("../db/sequelize") 
class ContactService{



    async getAllMessages(limit,offset){
        const messages = await models.Message.findAll({limit,offset})
        return messages
    }
}
module.exports = {
    ContactService
}