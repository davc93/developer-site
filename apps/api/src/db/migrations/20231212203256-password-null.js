'use strict';

const {DataTypes} = require("sequelize")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("users", 'password', {
      allowNull: true,

      type: DataTypes.STRING
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("users", 'password', {
      allowNull: false,

      type: DataTypes.STRING
    });
  }
};
