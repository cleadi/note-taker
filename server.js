// Global variables
const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

// Environment variable PORT tells the web server what port to listen on
const PORT = process.env.PORT || 3001;

// Express server application variable
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

// Tells Express server to start listening on the defined port number
app.listen(PORT, () =>
  console.log(`Express server listening at http://localhost:${PORT}`)
);

app.post('/api/notes', (req, res) => {
  let notesData = req.body
  notesData.id = uuidv4()

  currentData.push(notesData)

  fs.writeFile('./db/db.json', JSON.stringify(currentData), (err) => {
    err ? console.error(err) : console.log('Success!')}
  )

  res.status(201).json(currentData)
});

app.delete('/api/notes/:id', (req, res) => {
  let deleteNoteId = req.params.id
  currentData = currentData.filter(note => note.id != deleteNoteId)

  fs.writeFile('./db/db.json', JSON.stringify(currentData), (err) =>{
    err ? console.error(err) : console.log('Deleted!')}
  )

  res.status(200).json(currentData)
});

// Variables to pull in and use the routes from the notes.js app
const notesRouter = require('./routes/notes');
app.use('./routes/notes', notesRouter);
