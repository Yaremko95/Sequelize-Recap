import Class from "./Class.js";
import Module from "./Module.js";
import Student from "./Student.js";
import Teacher from "./Teacher.js";
import ClassStudent from "./ClassStudent.js";

//CLASS-STUDENT

Class.belongsToMany(Student, {
  through: { model: ClassStudent, unique: false },
});
Student.belongsToMany(Class, {
  through: { model: ClassStudent, unique: false },
});

// TEACHER-CLASS

//hasMany
//belongsTo

Teacher.hasMany(Class);
Class.belongsTo(Teacher);

export default { Class, Module, Student, Teacher };
