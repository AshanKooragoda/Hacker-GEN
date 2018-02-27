const mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hacker_gen"
});

connection.connect((err) => {
  if(err){
    console.log("sss")
    return console.log(err.message);
  }
  console.log("Connected to mysql server");
});

module.exports = {connection};
