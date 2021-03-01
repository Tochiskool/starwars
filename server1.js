//Dependencies || core modules
//===================================
const express = require('express');
const app = express();

const PORT = 3000;

//Data 
//====================================
const yoda = {
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
};
const darthmaul = {
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 2000
};
const obiWanKenobi = {
    name: "Obi Wan Kenobi",
    role: "Sith Lord",
    age: 200,
    forcePoints: 2000
};

//Create one more data entry for the character Obi wan Kenobi.
//Enter anyvalues you like for the parameters following the same format as the Yoda and Darth Maul Character
//
//Your code goes here
//

//Routes
//===============================================
app.get('/', (req, res) => {
    console.log(req.url)
    res.send(`Welcome to the star wars Page!!`);
})

app.get('/yoda', (req, res) => {
    res.json(yoda)
})

app.get('/darthmaul', (req, res) => {
    res.json(darthmaul)
})
app.get('/obiWanKenobi', (req, res) => {
    res.json(obiWanKenobi)
})


//Listening
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})