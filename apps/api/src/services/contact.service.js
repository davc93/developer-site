const {models} = require("../db/sequelize") 
class ContactService{



    async getAllMessages(limit,offset){
        const messages = await models.Message.findAndCountAll({limit,offset})
        return messages
    }
}
module.exports = {
    ContactService
}