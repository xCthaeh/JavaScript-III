/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is when code is executed using "this" keyword as part of simple function 
     call then it refers to global or window object in case of browser. It is also default binding.
 
* 2. Implicit binding is when 'this' gets assigned almost automatically. You can see it on an object literal,
     if you create a method within an object. 'this' refers to the object holding the method.

* 3. New binding is when you use the 'new' keyword to create an object from a constructer function. 
     In this case 'this' is bound to the 'new' object created by the constructor.

* 4. Explicit Binding is when a function is called using call, apply, and bind method. 
     It's called explicit because you're explicitly passing it a 'this' keyword.



*
* write out a code example of each explanation above
*/


// Principle 1

// code example for Window Binding

function windowBinding() {
    console.log(this);
  }
  windowBinding();

// Principle 2

// code example for Implicit Binding

const person = {
    firstName: "Alyssa",
    lastName:  "Hatfield",
    fullName: function() {
      console.log(`Name: ${this.firstName} ${this.lastName}`);
    }
  };
  person.fullName();

// Principle 3

// code example for New Binding

function marvelCharacter(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function() {
      console.log(`Name: ${this.firstName} ${this.lastName}`);
    };
  }
  const guardians = new marvelCharacter("Peter", "Quill");
  const doctorStrange = new marvelCharacter("Steven", "Strange");
  const xmen = new marvelCharacter("Jean", "Grey");
  const ironMan = new marvelCharacter("Tony", "Stark");
  xmen.fullName();


// Principle 4

// code example for Explicit Binding

const deadPool = {
    name: 'Deadpool'
  }
  
  const realName = ['Wade', 'Wilson'];
  
  function poolDialog(first, last){
    console.log(`I'm ${this.name}, but you might also know me as ${first} ${last}.`);
  }
  
  poolDialog.apply(deadPool, realName);