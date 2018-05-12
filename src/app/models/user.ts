export class User {
  isUserLoggedIn: boolean;
  username: string;
  password: string;
  name: string;
  type: string;
  index: string;
  telephone: string;

  constructor() {}

  setUserDetail(username, password, name, type, index,telephone) {
    this.index = index;
    this.username = username;
    this.name = name;
    this.password = password;
    this.type = type;
    this.telephone = telephone;
  }
}

