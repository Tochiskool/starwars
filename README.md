# Star wars 01 
[Link](https://github.com/Tochiskool/starwars)
## File
* `server1.js`

## Instructions
- An app with routes of different star super heroes.
- Listening at port 3000.
## Routes
### `GET ROUTES`
- Route created to list every character in the list.
- Route created to select characters from the list through javascript logic.
### `POST ROUTES`
- A post route that post data to the `/api/characters` api route . 
- The posted data can be accessed through the route parameter api using the route name. e.g `/api/characters/:character`.
- Use Advance Rest Client(ARC) to test the api.

## HTML (`view.html` added)
* Html added styled with Bootstrap
* Jquery used to interact with the json object and to create the search logic.
* New characters can be added through postman or my more prefered ARC services. add through `http://localhost:3000/api/characters`.
