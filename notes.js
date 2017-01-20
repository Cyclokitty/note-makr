console.log('notes.js starting');

const fs = require('fs');

const fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch(e) {
      return [];
  }
};

const saveNotes = (notes) => {
   fs.writeFileSync('notes-data.json', JSON.stringify(notes));
 }
const addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    title,
    body
  };
  const duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  console.log('Getting all notes.')
};

const getNote = (title) => {
  //fetch the notes
  let notes = fetchNotes();
  // filter the notes to match title requested
  const filteredNotes = notes.filter((note) => note.title === title);
  // if note found: return it
  return filteredNotes[0];

  // else return undefined
};

const removeNote = (title) => {
  // fetch notes
  let notes = fetchNotes();
  // filter out note titles, removing one with matching title
  const filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  // save new notes array
  return notes.length !== filteredNotes.length;
};

debugger;
const logNote = (note) => {
  console.log('----');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
