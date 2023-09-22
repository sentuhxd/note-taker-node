const router = require('express').Router();

const { notes } = require('../../db/db')

const { createNewNote, deleteNote } = require('../../lib/notes')

router.get('/notes', (req, res) => {
    res.json(saved);
})

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let note = createNewNote(req.body, notes);
    res.json(note);
})

router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
})




module.exports = router;