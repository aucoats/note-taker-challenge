const fs = require('fs')
const path = require('path')
const uniqid = require('uniqid')
const router = require('express').Router()
const notesArray = require("../../db/db.json")

router.get('/notes', (req, res) => {
    let results = notesArray
    res.json(results);
})

router.post('/notes', (req, res) => {
    req.body.id = uniqid.time();
    console.log('req.body:', req.body)

    const note = req.body
    
    console.log('note:', note)

    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'), 
        JSON.stringify(notesArray)
    )
    
    if(res) {
        console.log(`Post successful!`)
        return res.json()
    }
})

module.exports = router;