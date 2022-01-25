require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_STRING, {
    useNewUrlParser:true,
    useFindAndModify:true,
    useCreateIndex:false,
    useUnifiedTopology:true
})

mongoose.connection.once('open', () => console.log('I connected to MongoDB'));
mongoose.connection.once('error', () => console.log(console.error));

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/', (req, res) => {
    res.send('Beezwax Message board')
})

app.listen(PORT, () => console.log(`Listening on PORT: ` + PORT));