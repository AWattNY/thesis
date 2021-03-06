const express = require('express');

const app = express();
const api = require('./api/api');
const db = require('../db/dbModels');



require('./middleware/middleware')(app);

//Adam's docker-testing endpoint
app.use('/adam', (req, res) => res.send('Hi Adam. Michael Comes is an amazing genius. just kidding - but Isaac is really sexy!'));

app.use('/api', api);


//serve landing page
app.use('/', express.static('.'));

app.listen(3000, () => console.log('listening on port 3000'));
