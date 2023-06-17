const express = require('express')

const app = express();

const routes = require('./routes')

app.use(express.static(__dirname + '/static'))

app.use('/assignments', routes)

app.listen(5500, () =>
    console.log('Example app listening on port 5500!'),
);