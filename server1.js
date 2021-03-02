//Dependencies || core modules
//===================================
const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

//Handle Data Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


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
    //console.log(req.url)
    //res.send(`Welcome to the star wars Page!!`);
    res.sendFile(path.join(__dirname, "view.html"));
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

//Post request
//We are posting to the api/characters route

app.post("/api/characters", (req, res) => {
   
    //Grabbing the posted data body
    let newCharacter = req.body;
    console.log(newCharacter)

    //Add to the characters array
    characters.push(newCharacter);

    //res
    res.json(newCharacter);
})

//Listening
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})