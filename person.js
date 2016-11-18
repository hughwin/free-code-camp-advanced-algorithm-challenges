var Person = function(firstAndLast) {

  var fullName = firstAndLast; // Full name is set from whatever the value firstAndLast is set to. 
  var arr = fullName.split(' '); // Creates an array from fullName, splitting the letters between by a space. 

  this.getFirstName = function() {
    return arr[0];
  };
  // Return the first name from the name that is earlier split up into an array 

  this.getLastName = function() {
    return arr[1];
  };
  // Return the last name from the name that is earlier split up into an array 

  this.getFullName = function() {
    return fullName;
  };
  // returns the fullname

  this.setFirstName = function(first) {
    arr[0] = first;
    fullName = arr.join(' ');
  };
  // changes the value of the first item in the array, and then changes the value of fullName

  this.setLastName = function(last) {
    arr[1] = last;
    fullName = arr.join(' ');
  };
   // changes the value of the second item in the array, and then changes the value of fullName
  
  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
    arr = fullName.split(' ');
	// changes the value of fullName, and then creates a new array
  };
};

var bob = new Person('Bob Ross'); // Creates a new Person object 
