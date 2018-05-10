import {Injectable, Inject} from '@angular/core';
import {User} from '../models/user';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Router} from '@angular/router';


@Injectable()
export class UserService {

  private currentUser: User;
  private http: Http;

  constructor(private router: Router, http: Http) {
    this.currentUser = new User();
    this.http = http;
  }

  // get user details according to username and password
  authenticate(username, password) {
    return this.http.post('http://localhost:3000/get_user', JSON.stringify({username: username, password: password}),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }

  // get user details according to username and password
  adduser(index, name, type, emails, password) {
    return this.http.post('http://localhost:3000/add_user', JSON.stringify({
        index: index,
        name: name,
        type: type,
        emails: emails,
        password: password
      }),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }

  // get all users who is not admins
  alluser() {
    return this.http.get('http://localhost:3000/all_users').map(res => res.json());
  }

  // delete user
  deleteUser(index) {
    return this.http.post('http://localhost:3000/delete_user', JSON.stringify({
        index: index
      }),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }

  // add assignments to the database
  addAssignment(assignment_name, descryption, password, deadline, language) {
    return this.http.post('http://localhost:3000/add_assignment', JSON.stringify({
        assignment_name,
        descryption,
        password,
        deadline,
        language
      }),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }

  ////////////////// get all assignments
  allAssignments() {
    return this.http.get('http://localhost:3000/all_assignments').map(res => res.json());
  }

  //////////////// add inputs
  addInputOutput(assignment_no, input, output) {
    return this.http.post('http://localhost:3000/add_input', JSON.stringify({
        assignment_no,
        input,
        output
      }),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }

  ///////////////////////////// all inputs
  allInputs() {
    return this.http.get('http://localhost:3000/all_inputs').map(res => res.json());
  }

  ///////////////////////////// delete input
  deleteInput(input_no) {
    return this.http.post('http://localhost:3000/delete_input', JSON.stringify({
        input_no
      }),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }

  /////////////////////////// get all plagarism
  allplagarism() {
    return this.http.get('http://localhost:3000/plagarism').map(res => res.json());
  }

// {
//   "clientId": "e5054c11ab60a06eb141b7c0f5f61390",
//   "clientSecret":"17b22e4aecd316eebee36fecab8d4cd3f3b5ec661a7ca92ad4e4a236babdd9d9",
//   "script": "<?php function writeMsg() { echo \"Hello world!\"; echo \"Heddddddddddllo world!\";} writeMsg() // call the function?>",
//   "language":"php",
//   "versionIndex":"0"
// }
// compile request made to the server
  compiler(script, language) {
    return this.http.post('http://localhost:3000/compile', JSON.stringify({
        script,
        language
      }),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }
  // get inputs and outputs of specific assignment
  inAndOutOfAssignment(assignment_no) {
    return this.http.post('http://localhost:3000/inputs', JSON.stringify({
        assignment_no
      }),
      new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})}))
      .map(res => res.json());
  }
}
