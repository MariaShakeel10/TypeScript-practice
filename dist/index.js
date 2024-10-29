"use strict";
// type annotations
let myVariable = "hi";
let age = 78;
console.log(myVariable);
console.log(age);
// map & debugging
if (age < 100)
    age += 10;
// Fundamentals // typescript is smart in considering the fundamentals
let sales = 123456;
let course = "Typescript";
let is_available = true;
// avoid using any
let level;
level = 1;
level = "a";
/*function render(document: any) {
   console.log(document);
   
}*/
// arrays
// let number:number[]=[1,2,3,'4']//error with tring in 4
let number = [];
number.forEach(n => n);
// Tuples
// it is a fixed length array where each element has a particular.(useful for only two values)
// restricting your tuples to 2 values is easy to understand the code.
let user = [1, "abc"];
// user[0].
// user[1].
// let user:[number,string]=[1,"abc","a",1] //error
//# sourceMappingURL=index.js.map