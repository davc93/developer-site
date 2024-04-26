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