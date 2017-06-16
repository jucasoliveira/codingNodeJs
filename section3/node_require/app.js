console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

/*
var res = notes.addNote();
console.log(res);
//Chalenge create a export function add wich will recieve a and b,
//sum this variables and print the result(look a notes.js too)
console.log("Result : ", notes.add(2,23));

//Finish

var filteredArray = _.uniq(['Mike', 1 , 'Lucas',1,2,3,4])
console.log(filteredArray);
*/
var argv = yargs.argv;
var command = process.argv[2];

console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
  notes.addNote(argv.title, argv.body)
} else if (command === 'list') {
  notes.getAll()
} else if (command === 'read') {
  notes.getNote(argv.title)
} else if (command === 'remove') {
  notes.removeNote(argv.title)
} else{
  console.log("Command not recognized")
}
