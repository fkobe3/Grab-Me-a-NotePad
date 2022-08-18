const router = require('express').Router();
const notes = require('../../db/db');
const { createNote, removeNote, validateNote } = require('../../lib/multinote.js');

// API response for GET methods on notes endpoint
router.get('/multinote.js', (req, res) => {
    res.json(notes);
});

// API response for POST methods on notes endpoint
router.post('/multinote.js', (req, res) => {
    if(validateNote(req.body)) {
        const note = createNote(notes, req.body);
        res.json(note);
    }
    else
        res.status(400).send('The note is not properly formatted!');
});

// API response for DELETE methods on notes endpoint
router.delete('/multinote.js/:id', (req, res) => {
    const result = removeNote(notes, req.params.id);

    if(result)
        res.status(200).send(`The note with id ${req.params.id} has been successfully removed!`);
    else
        res.status(400).send(`There was an error removing the note with id: ${req.params.id}! Please try again at a later time.`);
});

module.exports = router;