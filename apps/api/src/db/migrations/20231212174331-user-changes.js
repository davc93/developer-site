"use strict";
const {DataTypes} = require("sequelize")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("users","name",
      {
        type: DataTypes.STRING,
      },

    );
    await queryInterface.addColumn("users","sub",
      {
        type: DataTypes.STRING,
      },

    );
    await queryInterface.addColumn("users","provider",
      {
        type: DataTypes.STRING,
      },

    );
    
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("users", "name");
    await queryInterface.removeColumn("users", "sub");
    await queryInterface.removeColumn("users", "provider");

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
