const express = require('express');
const htmlRoute = require('./routes/htmlRoute');
const apiRoute = require('./routes/apiRoute')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', apiRoute);
app.use('/', htmlRoute);


app.listen(PORT, () => {
    console.log(`App server now listening on port ${PORT}!`)
});