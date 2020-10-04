//Write a class called Name and create the following attributes given a first name and last name (as fname and lname):

class Name {
	constructor(f, l) {
		this.fname = f[0].toUpperCase() + f.slice(1).toLowerCase();
		this.lname = l[0].toUpperCase() + l.slice(1).toLowerCase();
		this.fullname = `${this.fname} ${this.lname}`;
		this.initials = `${this.fname[0]}.${this.lname[0]}`;
	}
}