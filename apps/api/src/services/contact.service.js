const { Op } = require('sequelize')
const { models } = require('../db/sequelize')

class ContactService {
  async getAllMessages(query) {
    const { orderBy = 'id', orderDirection = 'desc', filters } = query
    const page = Number(query.page)
    const pageSize = Number(query.pageSize)
    const obj = structuredClone(filters)
    for (let key in obj) {
      const value = obj[key]
      obj[key] = {
        [Op[Object.keys(value)[0].slice(1)]]: Object.values(value)[0]
      }
    }
    const { rows, count } = await models.Message.findAndCountAll({
      limit: pageSize,
      offset: page * pageSize - pageSize,
      where: obj,
      order: [[orderBy, orderDirection]]
    })

    return {
      results: rows,
      info: {
        page,
        pageSize,
        pageCount: Math.ceil(count / pageSize),
        total: count
      }
    }
  }
}
module.exports = {
  ContactService
}
