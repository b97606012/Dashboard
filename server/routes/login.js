const { Router } = require('express');
const jwt = require('jsonwebtoken');
const pool = require('../db');
const secretKey = 'secret_key_for_lite_on';
const bcrypt = require('bcrypt');

const router = Router();

router.post('/', (request, response, next) => {
    const { email, password } = request.body;

    pool.query('SELECT * FROM users WHERE email =$1',
        [email],
        (err, res) => {
            if (err) return next(err);
            const hashedPassword = res.rows[0]?.passwordhash;
            bcrypt.compare(password, hashedPassword, (err, result) => {
                if (err || !result) {
                    return response.json({ status: 401 });
                }
                const token = jwt.sign({ email }, secretKey, { expiresIn: '5m' });
                response.json({ token, status: 200 });
            });
        });
});
router.get('/forget', (request, response, next) => {

    response.json({ status: 200 });
});


module.exports = router;