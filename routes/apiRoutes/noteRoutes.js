const fs = require('fs')
const path = require('path')
const uniqid = require('uniqid')
const router = require('express').Router()
const notes = require("../../db/db.json")

router.get('/notes', (req, res) => {
    let results = notes
    res.json(results);

    return notes;
})

router.post('/notes', (req, res) => {
    req.body.id = uniqid.time();
    console.log('req.body:', req.body)
    console.log('notes:', notes)


    const note = req.body
    
    console.log('note:', note)

    notes.push(note);

    console.log('notes:', notes)

    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'), 
        JSON.stringify({ notes })
    )
    
    if(res) {
        console.log(`Post successful!`)
    }
})

module.exports = router;