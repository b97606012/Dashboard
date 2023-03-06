const fs = require('fs');
const express = require('express');
const bodyPaser = require('body-parser');
const cors = require('cors');

const routes = require('./routes');
const { verifyToken } = require('./routes/verify-token')

const app = express();
app.use(bodyPaser.json());
app.use(cors());
app.use(verifyToken);

app.use('/', routes);


app.use((err, req, res, next) => {
    res.json(err);
})

const port = 4000;
app.listen(port, () => console.log(`Listening on port ${port}`))