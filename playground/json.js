// how does json work?

const obj = {
  name: 'Laura'
};

// turn your object into a string
const stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

// take a string and turn it into an object

const personString = '{"name": "LauraVeee", "age": 45}';
const personObj = JSON.parse(personString);
console.log(typeof personObj);
console.log(personObj);
console.log(`${personObj.name} is ${personObj.age} years old.`);

const fs = require('fs');

const originalNote = {
  title: "YDKJS: Types and Grammar",
  body: "Types of data in JS and the grammar of JS."
};

// orginalNoteString
const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

const noteString = fs.readFileSync('notes.json');
// convert bakc into an object called noteString
const note = JSON.parse(noteString);
console.log(typeof note); //this should be an object
console.log('Title: ', note.title); //this should give you the title
