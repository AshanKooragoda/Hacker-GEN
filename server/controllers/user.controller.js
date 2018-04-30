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
    connection.query("insert into users (index_no, name, type, email, password) VALUES (?, ?, ?, ?, ?)",
      // ['aa','aa'], INSERT INTO person (first_name, last_name) VALUES ('John', 'Doe');
      [user.body.index, user.body.name, user.body.type, user.body.emails, user.body.password],
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
    connection.query("insert into assignment (assignment_name, descryption, password, deadline, language) VALUES (?, ?, ?, ?, ?)",
      [user.assignment_name, user.descryption, user.password, user.deadline, user.language],
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
///////////////////////////////////////////////////////
// get all plagarism

module.exports = {
  getUser, addUser, allUser, deleteUser, addAssignment, allAssignments, addInput, allInputs, deleteInput, getPlagarsim
};
