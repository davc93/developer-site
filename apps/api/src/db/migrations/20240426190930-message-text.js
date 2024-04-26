'use strict';
const sequelize = require("sequelize");
const {MESSAGE_TABLE} = require("../models/message.model")
const { Sequelize, DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn(MESSAGE_TABLE,"message",{
      type:sequelize.TEXT
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn(MESSAGE_TABLE,"message",{
      type:sequelize.STRING
    })

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
