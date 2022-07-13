import express from 'express';
import mongoose from 'mongoose';

// Cors is security pre-requisite
import Cors from 'cors';
import cards from './dbCards.js';

// App Config
const app = express();
const port = process.env.PORT || 9000;
// Connecting MongoDB
const connection_url = 
"mongodb+srv://admin:3LIQnhHrJ5F6shTF@cluster0.4bxpwbe.mongodb.net/couplesdb?retryWrites=true&w=majority";

// Middlewares
app.use(express.json());
app.use(Cors());

// DB config (connect to database)
// Parsing parameters to make connection smooth w/ mongoose
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello world!!'));

// Post endpoint adds / uploads data to db
// Response status of 201 = user data added
app.post('/user/couples', (req, res) => {
    const dbCard = req.body;

    cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else{
            res.status(201).send(data)
        }
    })
});

// Get will be to get the info from the db
app.get('/user/couples', (req, res) => {
    cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else{
            res.status(200).send(data);
        }
    });
});

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
