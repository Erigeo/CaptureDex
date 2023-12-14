var Express = require("express");
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer")
const path = require("path");
var bodyParser = require('body-parser');



var app=Express();
app.use(cors());


var CONNECTION_STRING="mongodb+srv://yves:yves123@pokedatabase.tsob9ku.mongodb.net/"

var DATABASENAME="pokemonDataBase";
var database;

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(Express.static(path.join(__dirname, "../dist")));
app.get((req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.listen(PORT, () => {
    Mongoclient.connect(CONNECTION_STRING, (error, client)=> {
        database = client.db(DATABASENAME);
        console.log("Mongo DB Connected!");    
        console.log("Server running at http://localhost:" + PORT)    
    })
})

app.get('/api/capturedex/GetUsers', (request, response) => {
    database.collection("users").find({}).toArray((error, result) => {
        response.send(result);
    })
});

app.get('/api/capturedex/GetPokemons', (request, response) => {
    database.collection("pokemons").find({}).toArray((error, result) => {
        response.send(result);
    })
});


app.post('/api/capturedex/LoginUser', async (req, res) => {
  try {
    const { user, password } = req.body;
    userDB = await  database.collection("users").findOne({ login: user, password: password });

    if (!userDB) {
      return res.status(401).send('Invalid credentials.');
    }

    res.status(200).send('Successful login!');
  } catch (error) {
    console.error(error.response.data);
    res.status(500).send('Error while authenticating user.');
  }
});

app.post('/api/capturedex/AddUsers',multer().none(), (request, response) => {
    database.collection("users").count({}, function(error, numOfDocs){
        database.collection("users").insertOne({
            id: (numOfDocs+1).toString(),
            login: request.body.user,
            password: request.body.password,
        });
        response.json("Added successfully!");
    })
})

app.delete('/api/capturedex/DeleteUsers', (request, response) => {
    database.collection("users").deleteOne({
        id: request.query.id
    });
    response.json("Deleted successfully!");
})