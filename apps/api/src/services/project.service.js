const { models } = require("../db/sequelize");

class ProjectService {
  async create(data) {
    const newProject = await models.Project.create(data);
    return await newProject.save();
  }
  async addLabel(data) {
    const project = await models.Project.findByPk(data.projectId);
    if (!project) {
      throw new Error("project not found");
    }
    const label = await models.Label.findByPk(data.labelId);
    if (!label) {
      throw new Error("label not found");
    }
    const newItem = await models.LabelProject.create(data);
    return newItem;
  }
  async findAll(query) {
    const {limit,offset,...fields} = query
    const projects = await models.Project.findAll({
      include: [
        { model: models.Image, as: "images", attributes: ["id", "url"] },
        {
          model: models.Label,
          through: { as: "labelProject", attributes: ["order", "createdAt"] },
          as: "labels",
          attributes: ["id", "title", "image"],
        },
      ],
      where:{
        ...fields
      },
      limit,
      offset
    });
    return projects;
  }

  async findOne(id) {
    const project = await models.Project.findByPk(id, {
      include: [
        { model: models.Image, as: "images", attributes: ["id", "url"] },
        {
          model: models.Label,
          through: { as: "labelProject", attributes: ["order", "createdAt"] },
          as: "labels",
          attributes: ["id", "title", "image"],
        },
      ],
    });
    if (!project) {
      throw new Error("Project doesn't exist");
    }
    return project;
  }

  async update(id, changes) {
    const project = await this.findOne(id);
    const rta = await project.update(changes);
    return rta;
  }

  async delete(id) {
    const project = await this.findOne(id);
    await project.destroy();
    return { id };
  }
}

module.exports = { ProjectService };
