const http = require("http");
const host = 'localhost';
const port = 8000;


var firebase = require("firebase/app");
const { firebaseConfig } = require("./firebase");
require("firebase/auth");
require("firebase/database");
const admin = require('firebase-admin');
const functions = require('firebase-functions');

firebase.initializeApp(firebaseConfig);

admin.initializeApp(functions.config().firebase);

let db = admin.firestore();
let user = {
  nome : "joseph",
  email : "joseph@gmail.com",
  senha : "123456"
}

let docRef;


const requestListener = function (req, res) {
    res.writeHead(200);
    switch (req.url) {
        case "/add":
          res.writeHead(200);
          docRef = db.collection('usuarios');
          docRef.add(user)
          .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
          console.log(user + 'adicionado');
          res.end("bicas");
          break;
        case "/users":
          res.writeHead(200);
          let users = [];
          db.collection("usuarios").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              console.log(`${doc.id} => ${doc.data()}`);
            });
        });
        res.end("console");
          break;
        default:
          res.writeHead(404);
          res.end(JSON.stringify({ error: "Resource not found" }));
      }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});