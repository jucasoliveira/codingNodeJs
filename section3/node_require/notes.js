console.log('Starting notes.js');

var addNote = (title,body) =>{
 console.log('addin note', title, body);
}

var getAll = () =>{
 console.log('Getting all notes');
}

var getNote = (title) => {
  console.log("Getting node", title);
}

var removeNote = (title) =>{
  console.log("Removing node", title);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
