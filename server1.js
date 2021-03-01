//Dependencies || core modules
//===================================
const express = require('express');
const app = express();

const PORT = 3000;


//Data 
//====================================
const characters = [
    {
        routeName: "yoda",
        name: "Yoda",
        role: "Jedi Master",
        age: 900,
        forcePoints: 2000
    },
    {
        routeName: "darthmaul",
        name: "Darth Maul",
        role: "Sith Lord",
        age: 200,
        forcePoints: 2000
    },
    {
        routeName: "obiwankenobi",
        name: "Obi Wan Kenobi",
        role: "Sith Lord",
        age: 55,
        forcePoints: 1350
    }
]



//Routes
//===============================================
app.get('/', (req, res) => {
    console.log(req.url)
    res.send(`Welcome to the star wars Page!!`);
})

//Display all characters
app.get('/api/characters', (req, res) => {
    return res.json(characters)
})

//Display a single character, or shows "No character found"
app.get('/api/characters/:character', (req, res) => {
  
    //Grabs the selected parameter
    let chosenCharacter = req.params.character;
    console.log(`${chosenCharacter}`);

    //Filters to show only the selected character
    for (let i = 0; i < characters.length; i++){
        if (chosenCharacter === characters[i].routeName) {
            return res.json(characters[i]);
        }
    }

    //If no match Displays character not found
   return  res.send(`Character Not Found!!`)

})


//Listening
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})