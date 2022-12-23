import { getDbConnection } from "./sqlite";

getDbConnection()
  .then((db) => {
    init(db);
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });

let _db;

function init(db) {
  _db = db;
}

import knex_db, { raw } from "./db-config";

const dbinitialize = async () => {
  testBase.resetDatabase(knex_db);
};

//& Teachers

const readTeachers = async () => {
  const sql = `SELECT * FROM Teachers`;
  return new Promise((resolve, reject) => {
    raw(sql)
      .then((Teachers) => {
        resolve(Teachers);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const readTeacherInfo = async (id) => {
  const sql = `SELECT * FROM teacher WHERE id=?`;
  return new Promise((resolve, reject) => {
    raw(sql, [id])
      .then((teacher) => {
        resolve(teacher);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const addTeacher = async (id, name, age) => {
  const sql = `INSERT INTO teacher(id,name,age) values(?,?,?)`;
  return new Promise((resolve, reject) => {
    raw(sql, [id, name, age])
      .then(() => {
        resolve({ status: "Successfully inserted Teacher" });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const updateTeacher = async (name, age, id) => {
  const sql = `UPDATE teacher SET name=? , age=? WHERE id=?`;
  return new Promise((resolve, reject) => {
    raw(sql, [name, age, id])
      .then(() => {
        resolve({ status: "Successfully updated Teacher" });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const deleteTeacher = async (id) => {
  const sql = `DELETE FROM teacher WHERE id=?`;
  return new Promise((resolve, reject) => {
    raw(sql, [id])
      .then(() => {
        resolve({ status: "Successfully deleted Teacher" });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

//& Students

const readStudents = async () => {
  const sql = `SELECT * FROM students`;
  return new Promise((resolve, reject) => {
    raw(sql)
      .then((student) => {
        resolve(student);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const readStudentInfo = async (id) => {
  const sql = `SELECT * FROM student WHERE id=?`;
  return new Promise((resolve, reject) => {
    raw(sql, [id])
      .then((student) => {
        resolve(student);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const addStudent = async (id, name, age, religion) => {
  const sql = `INSERT INTO student(id,name,age,religion) values(?,?,?,?)`;
  return new Promise((resolve, reject) => {
    raw(sql, [name, age, id, religion])
      .then(() => {
        resolve({ status: "Successfully inserted Student" });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const updateStudent = async (name, age, religion, id) => {
  const sql = `UPDATE student SET name=? , age=?, religion=? WHERE id=?`;
  return new Promise((resolve, reject) => {
    raw(sql, [name, age, religion, id])
      .then(() => {
        resolve({ status: "Successfully updated Teacher" });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const deleteStudent = async (id) => {
  const sql = `DELETE FROM student WHERE id=?`;
  return new Promise((resolve, reject) => {
    raw(sql, [id])
      .then(() => {
        resolve({ status: "Successfully deleted Teacher" });
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default {
  readTeachers,
  readStudents,
  addStudent,
  addTeacher,
  deleteTeacher,
  deleteStudent,
  readStudentInfo,
  readTeacherInfo,
  updateStudent,
  updateTeacher,
};
