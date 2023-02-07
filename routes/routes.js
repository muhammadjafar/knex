const { Router } = require('express');
const Person = require('../model/person');
const authRouter = require('./auth');
const personRouter = require('./person');
const multer = require('multer');
const upload = multer({dest: 'upload/'})

const router = Router();
router.use('/auth', authRouter);
router.use('/person', personRouter);
router.get('/all-person', async (req, res) => {
    try {
        const person = await Person.query();
        res.status(200).json(person);
    } catch (error) {
        res.status(500).json('something went wrong');
    }
})

router.post('/upload', upload.single("file"), async (req, res) => {
    console.log(req.file);
    res.send('image uploaded');
})

module.exports = router;