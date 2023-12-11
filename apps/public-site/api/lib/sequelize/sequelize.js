import { Sequelize,DataTypes } from "sequelize";

import { config } from "../../../server-config.js";
export const sequelize = new Sequelize(config.postgresDB);

export const User = sequelize.define(
  "User",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    sub: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    name: {
      type: DataTypes.STRING,
    },
  }
);
