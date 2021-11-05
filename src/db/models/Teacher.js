import sequelize from "../index.js";

import s from "sequelize";
const { DataTypes } = s;

const Teacher = await sequelize.define("teachers", {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  surname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    defaultValue: "http://default.image",
  },
});

export default Teacher;
