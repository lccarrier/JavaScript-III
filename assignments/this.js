/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window/Global Object Binding: 
* 2.  Implicit Binding: 
* 3.  New binding: 
* 4.  Explicit binding: 
*
* write out a code example of each explanation above
*/

// Principle 1
// When in the global scope, the value of “this” will be the window/console Object;
// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("Carrier");

// Principle 2
//Whenever a function is called by a preceding dot, the object before that dot is this.
// code example for Implicit Binding
const sayNameFunc = obj => {
    obj.sayName = function() {
      console.log(`Hello my name is ${this.name}`);
      console.log(this);
    };
  };
  const me = { name: 'LC' };
  const you = { name: 'Carrier' };
  sayNameFunc(me);
  sayNameFunc(you);
  
  // Invoke Methods on our objects
  me.sayName();
  you.sayName();

// Principle 3
//Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
// code example for New Binding
function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const john = new CordialPerson('Carrier');
  const carrier = new CordialPerson('John');
  
 john.speak();
 carrier.speak();

// Principle 4
//Whenever JavaScript’s call or apply method is used, this is explicitly defined.
// code example for Explicit Binding


