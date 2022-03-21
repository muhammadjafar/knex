const { Router } = require('express');
const authRouter = require('./auth');
const personRouter = require('./person');

const router = Router();
router.use('/auth', authRouter);
router.use('/person', personRouter);

module.exports = router;