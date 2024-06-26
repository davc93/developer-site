const { Sequelize } = require("sequelize") 

const { config } = require("../config");
const setupModels = require("./models");

const options = {
  dialect: "postgres",
  logging: config.isProd ? false : console.log
};


const sequelize = new Sequelize(config.dbUrl, options);
setupModels(sequelize);

module.exports =   sequelize ;
