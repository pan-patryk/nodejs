const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return notes = JSON.parse(notesString);
  } catch (e) {
    return [];
  }
}

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title,body) => {
  var note = {
    title,
    body
  };
  var notes = fetchNotes();
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note;
  };
};

var getAll = () => {
    return fetchNotes();
}

var getNote = (title) =>{
  var notes=fetchNotes();
  var newNotes=notes.filter((note) => note.title === title);
  return newNotes[0];
}

var removeNote = (title) =>{
   var notes=fetchNotes();
   var newNotes=notes.filter((note) => note.title !== title);
   saveNotes(newNotes);

   return notes.length !== newNotes.length;
}

var getCommandDescription = (type) => {
  if (type) {
    var returns = {
      title:{
        describe: 'Title of note',
        demand: true,
        alias:'t'
      },
      body:{
        describe: 'Body of note',
        demand: true,
        alias:'b'
      }
    };
  }else{
    var returns = {
      title:{
        describe: 'Title of note',
        demand: true,
        alias:'t'
      },
    };
  }
  return returns;
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  getCommandDescription
};
