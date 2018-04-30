var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var UserController = require('./controllers/user.controller');

var app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server working....");
});

//  get specific user according to username and password
app.post("/get_user", (req, res) => {
  UserController.getUser(req).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    console.log("error");
    res.status(400).send(err);
  });
});
///////////////////////////////////////////////////////

//get specific user according to username and password
app.post("/add_user", (req, res) => {
  console.log(req.body);
  UserController.addUser(req).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});
///////////////////////////////////////////////////////
//  get every user (admins and teachers)
app.get("/all_users", (req, res) => {
  UserController.allUser().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});
/////////////////////////////////////////////////
// delete users
app.post("/delete_user", (req, res) => {
  console.log(req.body);
  UserController.deleteUser(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});
/////////////////////////////////////////////////
// add assignments
app.post("/add_assignment", (req, res) => {
  UserController.addAssignment(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});
///////////////////////////////////////////////////
// Get all assignments
app.get("/all_assignments", (req, res) => {
  UserController.allAssignments().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});
/////////////////////////////////////////////////////
// Add input out put
app.post("/add_input", (req, res) => {
  console.log(req.body);
  UserController.addInput(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});
////////////////////////////////////////////////////
// get all inputs and outputs
app.get("/all_inputs", (req, res) => {
  UserController.allInputs().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});
/////////////////////////////////////////////
// delete inputs
app.post("/delete_input", (req, res) => {
  console.log(req.body);
  UserController.deleteInput(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});
//////////////////////////////////////////
// get plagarism
app.get("/plagarism", (req, res) => {
  UserController.getPlagarsim().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});
app.listen(3000, () => {
  console.log("Server is up on 3000");
});



