const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.post('/', (request, response, next) => {
    const { period } = request.body;

    pool.query('SELECT * FROM energy ORDER BY id ASC', (err, res) => {
        if (err) return next(err);

        response.json({ list: res.rows, token: response.locals.token });
    });
});


router.post('/total', (request, response, next) => {
    const { days } = request.body;
    pool.query('SELECT * FROM energysum WHERE periods =$1', [days], (err, res) => {
        if (err) return next(err);

        response.json({ list: res.rows, token: response.locals.token });
    });
});


module.exports = router;