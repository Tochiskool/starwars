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

app.get("/add", (req, res) => {
    res.sendFile(path.join(__dirname, "add.html"));
});

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
   return  res.json(false)

})

//Post request
//We are posting to the api/characters route

app.post("/api/characters", (req, res) => {
   
    //req.body hosts is equal to the JSON post sent from the user
    //This works because of our body parsing middleware
    let newCharacter = req.body;

    //Using a RegEx pattern to remove spaces from ndwCharacter
    //You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
    console.log(newCharacter)

    characters.push(newCharacter);

    //res
    res.json(newCharacter);
})

//Starts the server to begin listening
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})