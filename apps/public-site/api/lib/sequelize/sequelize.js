import pg from "pg"
import { Sequelize, DataTypes } from "sequelize";
import { config } from "../../../server-config.js";
export const sequelize = new Sequelize(config.postgresDB,{
  dialectModule:pg
});


export const Message = sequelize.define("message",{
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

export const User = sequelize.define("user", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },

  name: {
    type: DataTypes.STRING,
  },

  sub: {
    type: DataTypes.STRING,
  },

  provider: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  recoveryToken: {
    field: "recovery_token",
    allowNull: true,
    type: DataTypes.STRING,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: "customer",
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.NOW,
  },
  updatedAt:{
    allowNull: true,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW
  
  }
});
