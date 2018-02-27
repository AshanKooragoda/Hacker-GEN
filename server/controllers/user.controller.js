const {connection} = require('../db.connection');


const getUser = (user) => {       // query a specific user from the database using password and username
  return new Promise((resolve, reject) => {
    connection.query("select * from users where email=? and password=?",
      // ['aa','aa'],
      [user.body.username, user.body.password],
      (err, res) => {
        if (err) {
          return reject(err);
        }
        resolve(res);
      })
  });
};

// const getUserDetail = (user) => {       // query a specific user from the database using username (not include password, include t_id)
//   return new Promise((resolve, reject) => {
//     connection.query("select username, name, t_id from user left outer join teacher_user using(username) where username=?",
//       [user.username],
//       (err, res) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(res);
//       })
//   });
// };

const addUser = (user) => {       // query a specific user from the database using password and username
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

// const getTeachers = () => {       // query every user from the database who are teachers
//   return new Promise((resolve, reject) => {
//     connection.query("select * from user natural join teacher_user",
//       (err, res) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(res);
//       });
//   });
// };
//
// const getAdmins = () => {      // query every user from the database who are admins
//   return new Promise((resolve, reject) => {
//     connection.query("select * from user where username not in (select username from teacher_user)",
//       (err, res) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(res);
//       });
//   });
// };


module.exports = {
  getUser, addUser
};
