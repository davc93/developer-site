const { UserSchema, User } = require("./user.model");
const { Project, ProjectSchema } = require("./project.model");
const { Label, LabelSchema } = require("./label.model");
const { Image, ImageSchema } = require("./image.model");
const { LabelProjectSchema, LabelProject } = require("./label-project.model");
const {MessageSchema,Message} = require("./message.model")
module.exports = async function setupModels(sequelize) {
  await sequelize.authenticate();
  console.log("[sequelize]: Connection has been established successfully.");

  User.init(UserSchema, User.config(sequelize));
  Project.init(ProjectSchema, Project.config(sequelize));
  Label.init(LabelSchema, Label.config(sequelize));
  Image.init(ImageSchema, Image.config(sequelize));
  LabelProject.init(LabelProjectSchema, LabelProject.config(sequelize));
  Message.init(MessageSchema,Message.config(sequelize));
  
  Project.associate(sequelize.models);
  Label.associate(sequelize.models);
  Image.associate(sequelize.models);
};
