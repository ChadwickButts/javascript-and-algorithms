// /* Categorize users by skill 
// const developerProfiles = [
//     { skill: 'javascript', user: 'Chad' },
//     { skill: 'javascript', user: 'Bill' },
//     { skill: 'javascript', user: 'Sue' },
//     { skill: 'html', user: 'Sue HTML' },
//     { skill: 'css', user: 'Sue CSS' },
//     { skill: 'css', user: 'Bill CSS' }
//     ];

// function categorize(devs) {
//     let category = [];
//     devs.map( d => {
//         let cat = category.find( c => c.skill === d.skill);
//         if (cat !== undefined) {
//             cat.user.push(d.user.split(" ")[0]);
//             cat.count++;
//         } else {
//             category.push({ skill: d.skill, user: [d.user.split(" ")[0]], count: 1});
//         }
//     });
//     return category;
// }

// console.log(categorize(developerProfiles));
//  */

// /* static method example
// class Example {
//     constructor() {
//       const proto = Object.getPrototypeOf(this);
//     }
//     first(){}
//     second(){}
//     static third(){}
//   }
  
//   console.log(new Example()); // ['constructor', 'first', 'second'] */
  

// let o = {                 // An object o.
//     m: function() {       // Method m of the object.
//         let self = this;  // Save the "this" value in a variable.
//         this === o   
//         console.log(this);    // => true: "this" is the object o.
//         f();              // Now call the helper function f().

//         function f() {    // A nested function f
//             this === o    // => false: "this" is global or undefined
//             self === o    // => true: self is the outer "this" value.
//         }
//     }
// };
// o.m();

// let array = [1,2,3,4,5];

// array.forEach(c => {
//     return c * 2;
// });

// let result = array.map(c => {
//     return c * 2;
// });

// console.log(array, result);

// let map = function(func) {
//     let result = [];
//     return function(...elements) {
//         return func.apply(result, elements);
//     }
// }

// let ownfunc = map(c => {
//     return c * 3;
// })

// console.log(ownfunc(array));

// // console.log((function(c){return c * 3}).call(...array));
// // console.log(...array);

// // this is a closure
// const hello = () => {
// 	let greet = "hello!";
// 	return () => {
// 		console.log("Just saying " + greet);
// 	}
// }

// const shape = {
//     radius: 10,
//     diameter() {
//       return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius,
//   };
  
//   console.log(shape.diameter());
//   console.log(shape.perimeter());

  const array = {
    test: "Hello"
  };

  
    var greetings = "Chad";

  console.log(globalThis.greetings);