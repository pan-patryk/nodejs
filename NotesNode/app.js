
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
console.log(notes.getCommandDescription(true));
const argv = yargs
.command('add','Add a new note',notes.getCommandDescription(true))
.command('list','List all notes')
.command('read','Read a note',notes.getCommandDescription(false))
.command('remove','Remove note',notes.getCommandDescription(false))
.help()
.argv;
var command = argv._[0];

if (command === 'add'){
  var note = notes.addNote(argv.title,argv.body);
   console.log(_.isObject(note) ? `Note created \n-----\nAdded ${note.title} with text ${note.body}` : `Title already exists`);
} else if (command === 'list'){
  var allNotes = notes.getAll()
  console.log(`Pritning ${allNotes.length} note(s).`)
  allNotes.forEach(note => console.log(`\n-----\nTitle: ${note.title} with text ${note.body}`));
} else if (command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  console.log(noteRemoved);
  console.log(noteRemoved ? 'Note removed.' : `Note ${argv.title} not found!`);
} else if (command === 'read'){
  var note=notes.getNote(argv.title);
  console.log(_.isUndefined(note) ? `Note ${argv.title} does note exist`: `Note found \n-----\nTitle: ${note.title} with text ${note.body}`);
} else {
  console.log('Command not categorized');
}
