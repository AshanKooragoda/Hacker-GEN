const {connection} = require('../db.connection');

// query a specific user from the database using password and username
const getUser = (user) => {
  return new Promise((resolve, reject) => {
    connection.query("select index_no, name, type,email,telephone from users where email=? and password=aes_encrypt(?,'usa2010')",
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
    connection.query("insert into users (index_no, name, type, email, password, telephone) VALUES (?, ?, ?, ?, aes_encrypt(?,'usa2010'), ?)",
      // ['aa','aa'], INSERT INTO person (first_name, last_name) VALUES ('John', 'Doe'); aes_encrypt(?,?)
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
    connection.query("insert into assignment (assignment_name, descryption, language, teacher) VALUES (?, ?, ?, ?)",
      [user.assignment_name, user.descryption, user.language, user.tea],
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
///////////////////////////////////////////////////////
// get all plagarism
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
    connection.query("UPDATE users SET name=?, email=?, password=aes_encrypt(?, 'usa2010'), telephone=? WHERE index_no=?;",
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
// get answers of specific index
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
// get specific inputs
const get_specific_inputs = (user) => {
  return new Promise((resolve, reject) => {
    connection.query("select * from input_output where assignment_no = ?",
      [user.assignment_no],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve(res);
      })
  });
};
// check same answer
const sameAnswer = (user) => {
  return new Promise((resolve, reject) => {
    connection.query("select index_no from answers where answer = ?",
      [user.ans],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve(res);
      })
  });
};
// save plagarism
const save_plagarism = (user) => {
  return new Promise((resolve, reject) => {
    connection.query("insert into plagarism ( student_id1, student_id2, assignment_no) VALUES (?, ?, ?)",
      [user.id1, user.id2, user.ass_no],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve(res);
      })
  });
};



module.exports = {
  getUser, addUser, allUser, deleteUser, addAssignment, allAssignments, addInput, allInputs, deleteInput,
  getPlagarsim, getinputs, saveanswer, checkanswer, updateAnswer, updateUserDetail, getAns, getAllAns,
  get_specific_inputs, sameAnswer, save_plagarism
};
