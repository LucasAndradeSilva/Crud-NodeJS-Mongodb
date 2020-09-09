const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth');

router.use(authMiddleware);

//Middleware: Intercepta a requição entre o controller e a routa
router.get('/', (req, res) => {
    res.send({ ok: true, user: req.userId});
});

module.exports = app => app.use('/projects', router);