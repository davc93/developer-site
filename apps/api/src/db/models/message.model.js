const { Sequelize, DataTypes, Model } = require("sequelize");

const MESSAGE_TABLE = "messages";

const MessageSchema = {
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
};

class Message extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: MESSAGE_TABLE,
      modelName: "Message",
      timestamps: false,
    };
  }
}

module.exports = {
    MESSAGE_TABLE,
    Message,
    MessageSchema
}