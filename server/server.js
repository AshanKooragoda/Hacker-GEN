var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');
var UserController = require('./controllers/user.controller');
var axios=require('axios/lib/axios');
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
<<<<<<< HEAD
  //console.log(req.body);
=======
  console.log(req.body);
>>>>>>> b940d60dc4348c0f17093af749df1bfaad4f1e0c
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
<<<<<<< HEAD
 // console.log(req.body);
  UserController.deleteInput(req.body).then((result) => {
    res.status(200).send(result);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    re.methord(script='',lan='');
=======
  console.log(req.body);
  UserController.deleteInput(req.body).then((result) => {
    res.status(200).send(result);
>>>>>>> b940d60dc4348c0f17093af749df1bfaad4f1e0c
  }).catch((err) => {
    res.status(400).send(err);
  });
});
<<<<<<< HEAD


=======
>>>>>>> b940d60dc4348c0f17093af749df1bfaad4f1e0c
//////////////////////////////////////////
// get plagarism
app.get("/plagarism", (req, res) => {
  UserController.getPlagarsim().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});
<<<<<<< HEAD

app.post("/compile", (req, res) => {
  console.log(req.body.script)
  axios.post('https://api.jdoodle.com/v1/execute', {
    clientId: 'e5054c11ab60a06eb141b7c0f5f61390',
    clientSecret:'17b22e4aecd316eebee36fecab8d4cd3f3b5ec661a7ca92ad4e4a236babdd9d9',
    //script: "<?php function writeMsg() { echo \"Hello world!\"; echo \"Heddddddddddllo world!\";} writeMsg() // call the function?>",
    script: req.body.script,
    //language:"php",
    language: req.body.language,
    versionIndex:"0"
  })
    .then(function (response) {
      //console.log(response.data);
      res.status(200).send(response.data);
    })
    .catch(function (error) {
      res.status(400).send(error);
    });


});
/////// get inputs of an specific assignment
app.post("/inputs", (req, res) => {
  //console.log(req.body);
  UserController.getinputs(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

=======
>>>>>>> b940d60dc4348c0f17093af749df1bfaad4f1e0c
app.listen(3000, () => {
  console.log("Server is up on 3000");
});
