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

var titleOptions = {
  describe : 'Title of note',
  demand : true,
  alias : 't'
};

var bodyOptions ={
  describe : 'Body of note',
  demand : true,
  alias : 'b'
};

var argv = yargs
.command('add', 'Add a new note',{
  title : titleOptions,
  body : bodyOptions
})
.command('list', 'List all notes')
.command('read', 'Read a note',{ title : titleOptions })
.command('remove', 'Remove a note', { title : titleOptions })
.help()
.argv;

var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (!note) {
    console.log("Duplicated title");
  } else {
    console.log("Note Created");
    notes.logNote(note)
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).\n`);
  allNotes.forEach((note)=> notes.logNote(note));
} else if (command === 'read') {
  var getNote = notes.getNote(argv.title)
  var message = getNote ? notes.logNote(getNote) : 'Note not found';
  console.log(message);
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Note not found ';
  console.log(message);
} else{
  console.log("Command not recognized")
}
