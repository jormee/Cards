const express = require ('express');
const bodyParser = require ('body-parser');
const bcrypt = require ('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

port = process.env.PORT || 3000;

signin = require('./Controllers/signin');
register = require('./Controllers/register');
profile = require('./Controllers/profile');
cards = require('./Controllers/cards');

const db = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'postgres',
        password : 'olaTunji04',
        database : 'cards'
    }
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res)=> {
    res.send(db.users);
})

app.post('/signin', (req, res) => { signin.handleSignIn(req, res, db, bcrypt) });

// app.get('/cards', (req, res) => { cards.displayCards(req, res, db) });

app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) });

app.post('/edit-profile', (req, res) => { profile.editProfile(req, res, db) });

app.listen(port, ()=> {
    console.log(`app is running on port ${port}`)
})