'use strict';
const {MESSAGE_TABLE} = require("../models/message.model")
const { Sequelize, DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable(MESSAGE_TABLE,{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      organization: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
      },
      updatedAt:{
        allowNull: true,
        type: DataTypes.DATE,
        field: 'updated_at',
        defaultValue: Sequelize.NOW
      
      },


    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(MESSAGE_TABLE)
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
