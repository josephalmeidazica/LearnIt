const { Router } = require('express');
const router = Router();
const admin = require('firebase-admin');

const serviceAccount = require("../../learnit-e937e-firebase-adminsdk-2omql-203424c63b.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://learnit-e937e.firebaseio.com/',
});

const db = admin.database();

router.get('/', (req,res) => {

        res.send('resposta');

});

router.post('/newUser', (req,res) => {
    console.log(req.body);
    let NewUser = {
        nome: req.body.user.nome,
        email: req.body.user.email,
        senha: req.body.user.senha
    };
    
    db.ref('users').push(NewUser);
    res.send({data:{
        success:true,
    }});
    
});
module.exports =  router;