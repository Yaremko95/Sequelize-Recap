import sequelize from "../index.js";
import s from "sequelize";

const { DataTypes } = s;

const Module = sequelize.define("modules", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  week: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Module;
