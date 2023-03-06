const jwt = require('jsonwebtoken');
const secretKey = 'secret_key_for_lite_on';

const verifyToken = async (req, res, next) => {
    if (req.url.indexOf('/login') < 0) {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, secretKey, (err, decoded) => {
            if (err) {
                if (err.name === 'TokenExpiredError') {
                    return res.status(401).json({ error: 'Token Expired' });
                } else {
                    return next(err);
                }
            } else {
                const email = decoded.email;
                const newToken = jwt.sign({ email }, secretKey, { expiresIn: '5m' });
                res.locals.token = newToken;
                next()
            }
        });

    } else {
        next()
    }
};

module.exports = { verifyToken };