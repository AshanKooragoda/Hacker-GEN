var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var request = require('request');
var UserController = require('./controllers/user.controller');
var axios = require('axios/lib/axios');
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
  // console.log(req.body);
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
  //console.log(req.body);
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
  // console.log(req.body);
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
  // console.log(req.body);
  UserController.deleteInput(req.body).then((result) => {
    res.status(200).send(result);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    re.methord(script = '', lan = '');
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

app.post("/compile", (req, res) => {
  axios.post('https://api.jdoodle.com/v1/execute', {
    clientId: '63627f330bfbcbbf837c36d38f388ad8',
    clientSecret: 'cc58eeef460fc33276298b4faa1f542ddcbb1dbab045ca4584dd04bd1de5ad36',
    //script: "<?php function writeMsg() { echo \"Hello world!\"; echo \"Heddddddddddllo world!\";} writeMsg() // call the function?>",
    script: req.body.script,
    //language:"php",
    language: req.body.language,
    versionIndex: "0"
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
/// save answers to database
app.post("/save_answer", (req, res) => {
  //console.log(req.body);
  UserController.saveanswer(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});
// check weather he has a answer already
app.post("/if_answer", (req, res) => {
  console.log(req.body);
  UserController.checkanswer(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});
// update answer
app.post("/update_answer", (req, res) => {
  console.log(req.body);
  UserController.updateAnswer(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});
// updateUserDetail
app.post("/update_user", (req, res) => {
  console.log(req.body);
  UserController.updateUserDetail(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});
// save marks
// app.post("/save_mark", (req, res) => {
//   console.log(req.body);
//   UserController.savemark(req.body).then((result) => {
//     res.status(200).send(result);
//   }).catch((err) => {
//     res.status(400).send(err);
//   });
// });
// // update marks
// app.post("/update_mark", (req, res) => {
//   // console.log(req.body);
//   UserController.updatemark(req.body).then((result) => {
//     res.status(200).send(result);
//   }).catch((err) => {
//     res.status(400).send(err);
//   });
// });
// get ansswer of an specific student
app.post("/getAnswerOfStudent", (req, res) => {
  console.log(req.body);
  UserController.getAns(req.body).then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});
// get all answers allAnswers
app.get("/allAnswers", (req, res) => {
  UserController.getAllAns().then((result) => {
    res.status(200).send(result);
  }).catch((err) => {
    res.status(400).send(err);
  });
});
app.listen(3000, () => {
  console.log("Server is up on 3000");
});
