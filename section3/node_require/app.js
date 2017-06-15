console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');
const _ = require('lodash');

var res = notes.addNote();
console.log(res);

//Chalenge create a export function add wich will recieve a and b,
//sum this variables and print the result(look a notes.js too)
console.log("Result : ", notes.add(2,23));

//Finish

//console.log(_.isString(true));
//console.log(_.isString('Andrew'));

var filteredArray = _.uniq(['Lucas', 1 , 'Lucas',1,2,3,4])
console.log(filteredArray);




/*
var user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);
*/
