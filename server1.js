//Dependencies || core modules
//===================================
const express = require('express');
const app = express();

const PORT = 3000;


//Data 
//====================================
const characters = [
    {
        name: "Yoda",
        role: "Jedi Master",
        age: 900,
        forcePoints: 2000
    },
   {
        name: "Darth Maul",
        role: "Sith Lord",
        age: 200,
        forcePoints: 2000
    },
    {
        name: "Obi Wan Kenobi",
        role: "Sith Lord",
        age: 200,
        forcePoints: 2000
    }
]



//Routes
//===============================================
app.get('/', (req, res) => {
    console.log(req.url)
    res.send(`Welcome to the star wars Page!!`);
})

app.get('/api/characters', (req, res) => {
    return res.json(characters)
})

app.get('/api/characters/:character', (req, res) => {
   
    let chosenCharacter = req.params.character;
    console.log(`${chosenCharacter}`);

    for (let i = 0; i < characters.length; i++){
        if (chosenCharacter === characters[i].name) {
            return res.json(characters[i]);
        }
    }
   return  res.send(`Character Not Found!!`)

})


//Listening
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})