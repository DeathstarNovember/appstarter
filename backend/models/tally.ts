import { Sequelize, DataTypes } from "sequelize";
import User from "./user";
const sequelize = new Sequelize("sqlite::memory:");

const Tally = sequelize.define(
  "Point",
  {
    // Model attributes are defined here
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    note: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    // Other model options go here
  }
);

Tally.belongsTo(User);
export default Tally;
