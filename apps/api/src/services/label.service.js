const { Op } = require('sequelize')
const { models } = require('../db/sequelize')

class LabelService {
  async create(data) {
    const newLabel = await models.Label.create(data)
    return await newLabel.save()
  }

  async findAll(query) {
    const { pagination, filters, sort } = query
    const size = +pagination.size
    const page = +pagination.page
    const sorting = sort.map((sort) => sort.split(':'))

    const obj = structuredClone(filters)
    for (let key in obj) {
      const value = obj[key]
      obj[key] = {
        [Op[Object.keys(value)[0].slice(1)]]: Object.values(value)[0]
      }
    }
    const { rows, count } = await models.Label.findAndCountAll({
      limit: size,
      where: obj,
      offset: page * size - size,
      order: sorting
    })

    return {
      data: rows,
      meta: {
        page: page,
        size: size,
        pageCount: Math.ceil(count / size),
        total: count
      }
    }
  }

  async findOne(id) {
    const label = await models.Label.findByPk(id)
    if (!label) {
      throw new Error("Label doesn't exist")
    }
    return label
  }

  async update(id, changes) {
    const label = await this.findOne(id)
    const rta = await label.update(changes)
    return rta
  }

  async delete(id) {
    const label = await this.findOne(id)
    await label.destroy()
    return { id }
  }

  async deleteByProject(projectId) {
    const id = await models.LabelProject.destroy({
      where: {
        projectId
      }
    })
    return {
      id
    }
  }
}

module.exports = { LabelService }
