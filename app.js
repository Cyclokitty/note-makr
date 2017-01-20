console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');


const argv = yargs.argv;
const command = argv._[0];
console.log('Command: ', command);
console.log(`Yargs: `, argv);


if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Your note has been saved.');
    notes.logNote(note);
  } else {
      console.log('Your note title already exists. Please use a different title.');
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  const note = notes.getNote(argv.title);
  if (note) {
    console.log('Here is your note:');
    notes.logNote(note);
  } else {
      console.log('Your note title does not exist. Please use a different title.');
  }
} else if (command === 'remove') {
  const remove = notes.removeNote(argv.title);
  const message = remove ? 'Your note was erased.' : 'Note not found.'
  console.log(message);
} else {
  console.log(`Command note recognized.`);
}
