export class User {
  isUserLoggedIn: boolean;
  username: string;
  name: string;
  type: string;
  index: string;
  telephone: string;

  constructor() {}

  setUserDetail(username, password, name, type, index,telephone) {
    this.index = index;
    this.username = username;
    this.name = name;
    this.type = type;
    this.telephone = telephone;
  }
}

