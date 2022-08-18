const path = require('path');
const router = require('express').Router()

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/multinote.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/multinote.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;