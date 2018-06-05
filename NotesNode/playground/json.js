// var obj = {
//   name: 'Patryk'
// };
//
// var stringObj = JSON.stringify(obj);
//
// console.log(obj);
// console.log(stringObj);
// console.log(typeof stringObj);

// var personString = '{"name": "Patryk", "age" : 25}';
// personObj = JSON.parse(personString);
// console.log(typeof personObj);
// console.log(personObj);

const fs = require('fs');

var originalNote = {
  title : 'Some title',
  body: 'Some body'
};
var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
