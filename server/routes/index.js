const { Router } = require('express');
const login = require('./login');
const overview = require('./overview');
const router = Router();

router.use('/login', login);
router.use('/overview', overview);

module.exports = router;
