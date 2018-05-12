const {connection} = require('../db.connection');

// query a specific user from the database using password and username
const getUser = (user) => {
  return new Promise((resolve, reject) => {
    connection.query("select * from users where email=? and password=?",
      [user.body.username, user.body.password],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve(res);
      })
  });
};
/////////////////////////////////////////////////////////////////////

// query a specific user from the database using password and username
const addUser = (user) => {
  return new Promise((resolve, reject) => {
    connection.query("insert into users (index_no, name, type, email, password, telephone) VALUES (?, ?, ?, ?, ?, ?)",
      // ['aa','aa'], INSERT INTO person (first_name, last_name) VALUES ('John', 'Doe');
      [user.body.index, user.body.name, user.body.type, user.body.emails, user.body.password, user.body.contact],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve(res);
      })
  });
};
///////////////////////////////////////////////////////////////////////
// get all users
const allUser = () => {
  return new Promise((resolve, reject) => {
    connection.query("select * from users where not(type='admin')",
      (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve(res);
      })
  });
};
///////////////////////////////////////////////////////////////
// delete specific user
const deleteUser = (user) => {
  return new Promise((resolve, reject) => {
    connection.query("delete from users where index_no=?",
      [user.index],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve(res);
      })
  });
};
/////////////////////////////////////////////////////////////
// add assignments
const addAssignment = (user) => {
  return new Promise((resolve, reject) => {
<<<<<<< HEAD
    connection.query("insert into assignment (assignment_name, descryption, language) VALUES (?, ?, ?)",
      [user.assignment_name, user.descryption, user.language],
=======
    connection.query("insert into assignment (assignment_name, descryption, password, deadline, language) VALUES (?, ?, ?, ?, ?)",
      [user.assignment_name, user.descryption, user.password, user.deadline, user.language],
>>>>>>> b32ac471c80f6a9eb27cd156eea95a3a5f925795
      (err, res) => {
        if (err) {
          return reject(err);
        }
        connection.query("select max(assignment_no) from assignment ",
          (err, res1) => {
            if (err) {
              return reject(err);
            }
            resolve(res1);
          });
      })
  });
};
///////////////////////////////////////////////////////////////////
// Get all assignments
const allAssignments = () => {
  return new Promise((resolve, reject) => {
    connection.query("select * from assignment",
      (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve(res);
      })
  });
};
//////////////////////////////////////////////////////////////////
// add inputs and outputs
const addInput = (user) => {
  return new Promise((resolve, reject) => {
    connection.query("insert into input_output ( assignment_no, input, output) VALUES (?, ?, ?)",
      [user.assignment_no, user.input, user.output,],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve(res);
      })
  });
};
/////////////////////////////////////////////////////////////////
// return all inputs
const allInputs = () => {
  return new Promise((resolve, reject) => {
    connection.query("select * from input_output",
      (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve(res);
      })
  });
};
/////////////////////////////////////////////////
// delete input
const deleteInput = (user) => {
  return new Promise((resolve, reject) => {
    connection.query("delete from input_output where in_no=?",
      [user.input_no],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve(res);
      })
  });
};
<<<<<<< HEAD
///////////////////////////////////////////////////////
// get all plagarism
=======
<<<<<<< HEAD
///////////////////////////////////////////////////////
// get all plagarism
=======
>>>>>>> b940d60dc4348c0f17093af749df1bfaad4f1e0c
>>>>>>> b32ac471c80f6a9eb27cd156eea95a3a5f925795
const getPlagarsim = () => {
  return new Promise((resolve, reject) => {
    connection.query("select * from plagarism",
      (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve(res);
      })
  });
};
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b32ac471c80f6a9eb27cd156eea95a3a5f925795
////////////////////////////////////////////////////
// get specific inputs
const getinputs = (user) => {
  return new Promise((resolve, reject) => {
    connection.query("select * from input_output where assignment_no=?",
      [user.assignment_no],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve(res);
      })
  });
};
<<<<<<< HEAD
///////////////////////////////////////////////////////
// save answers to database
const saveanswer = (user) => {
  return new Promise((resolve, reject) => {
    connection.query("insert into answers ( assignment_no, index_no, answer, language, marks) VALUES (?, ?, ?, ?, ?)",
      [user.ass_num, user.index_num, user.ans, user.lang, user.mark],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve(res);
      })
  });
};
///////////////////////////////////////// ////
//check weather he has answer
const checkanswer = (user) => {
  return new Promise((resolve, reject) => {
    connection.query("select answer, language, marks from answers where assignment_no=? and index_no=?",
      [user.ass_num, user.index_num],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve(res);
      })
  });
};
///////////////////////////////////////////////
// update user detail
const updateUserDetail = (user) => {
  return new Promise((resolve, reject) => {
    connection.query("UPDATE users SET name=?, email=?, password=?, telephone=? WHERE index_no=?;",
      [user.name, user.emailA, user.password, user.tele, user.inNo],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve(res);
      })
  });
};
////////////////////////////////////////////////
// update answer
const updateAnswer = (user) => {
  return new Promise((resolve, reject) => {
    connection.query("UPDATE answers SET answer=?, language=?, marks=? WHERE assignment_no=? and index_no=?;",
      [user.ans, user.lang,user.mark, user.ass_num, user.index_num],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve(res);
      })
  });
};
////////// mark save
// const savemark = (user) => {
//   return new Promise((resolve, reject) => {
//     connection.query("insert into marks ( assignment_no, index_no, marks) VALUES (?, ?, ?)",
//       [user.assno, user.inno, user.mark],
//       (err, res) => {
//         if (err) {
//           return reject(err);
//         }
//         resolve(res);
//       })
//   });
// };
///////////////////////////// update marks
// const updatemark = (user) => {
//   return new Promise((resolve, reject) => {
//     connection.query("UPDATE marks SET marks=? WHERE assignment_no=? and index_no=?;",
//       [user.mark, user.assno, user.inno],
//       (err, res) => {
//         if (err) {
//           return reject(err);
//         }
//         resolve(res);
//       })
//   });
// };
///////////////////////// get answers of specific sudent
const getAns = (user) => {
  return new Promise((resolve, reject) => {
    connection.query("select * from answers where index_no=?",
      [user.index],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve(res);
      })
  });
};
// get All Answers
const getAllAns = () => {
  return new Promise((resolve, reject) => {
    connection.query("select * from answers",
      (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve(res);
      })
  });
};
=======

>>>>>>> b32ac471c80f6a9eb27cd156eea95a3a5f925795

module.exports = {
  getUser, addUser, allUser, deleteUser, addAssignment, allAssignments, addInput, allInputs, deleteInput, getPlagarsim, getinputs
=======
///////////////////////////////////////////////////////
// get all plagarism

module.exports = {
<<<<<<< HEAD
  getUser, addUser, allUser, deleteUser, addAssignment, allAssignments, addInput, allInputs, deleteInput,
  getPlagarsim, getinputs, saveanswer, checkanswer, updateAnswer, updateUserDetail, getAns, getAllAns
=======
  getUser, addUser, allUser, deleteUser, addAssignment, allAssignments, addInput, allInputs, deleteInput, getPlagarsim
>>>>>>> b940d60dc4348c0f17093af749df1bfaad4f1e0c
>>>>>>> b32ac471c80f6a9eb27cd156eea95a3a5f925795
};
