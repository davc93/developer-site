'use strict';
const {USER_TABLE} = require("../models/user.model")
const {Sequelize} = require("sequelize")
const {hashPassword} = require("../../bcrypt")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert(USER_TABLE,[
      {
        email:"davc93@gmail.com",
        password:hashPassword("123456"),
        role:"admin",
        created_at: new Date()
  
      }
    ])

  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(USER_TABLE, null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
