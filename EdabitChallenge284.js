//Create a class named User and create a way to check the number of users (number of instances) were created, so that the value can be accessed as a class attribute.

class User {
	static userCount=0;
	constructor(username) {
    this.username = username;
		User.userCount++;
  }
}