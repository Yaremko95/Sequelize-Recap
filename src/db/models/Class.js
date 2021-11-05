import sequelize from "../index.js";
import s from "sequelize";

const { DataTypes } = s;

const Class = sequelize.define("classes", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  //   tutorId:{

  //   }
});

export default Class;
