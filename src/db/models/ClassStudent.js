import sequelize from "../index.js";
import s from "sequelize";

const { DataTypes } = s;

const ClassStudent = sequelize.define("classStudent", {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    autoIncrement: true,
  },
  //  classId:{

  //  },
  //  studentId:{

  //  }
});

export default ClassStudent;
