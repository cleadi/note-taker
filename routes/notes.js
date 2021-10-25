const express = require('express');
const router = express.Router();
const JsonDataBase = require('../db/db.json');

// GET Route for homepage
router.get('./', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
});

// GET Route for notes page
router.get('./notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'))
});

router.get('./notes', (req, res) => {
  return res.status(200).json(notesData) // Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position 0
});

module.exports = router;
