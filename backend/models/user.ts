import { Sequelize, DataTypes } from "sequelize";
import Tally from "./tally";
const sequelize = new Sequelize("sqlite::memory:");

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    indexes: [],
    // Other model options go here
  }
);

User.hasMany(Tally);

export default User;
