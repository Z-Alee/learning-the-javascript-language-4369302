/**
 * Classes
 * 
 * The example version but working???
 * Refs:
 * Uncaught TypeError: Cannot set properties of undefined (setting 'bake'): https://www.geeksforgeeks.org/how-to-fix-javascript-typeerror-cannot-set-properties-of-undefined/
 */

let Cake = {}; // Initialize as an empty object

Cake.shape = "Round"; // Can set a property!

Cake.prototype.bake = function (temp, minutes) {
  // Bake a cake at a particular temperature
  // for a number of minutes
};
// Uncaught TypeError: Cannot set properties of undefined (setting 'bake')

// Can't get the above prototype to work - based on further reading, this is a snippet and not meant to be used easily?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain

/* ************************************************* */
// Can get this to work!
class CakeClass {
  bake(temp = 100, minutes = 1) {
    console.log("NewClass is baking at ${temp} degrees for ${minutes} minutes!");
  }
}

var chocoCakeClass = new CakeClass();

chocoCakeClass.bake(150, 5);
// NewClass is baking at 100 degrees for 1 minutes!
