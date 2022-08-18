const router = require('express').Router();
const noteRoutes = require('../apiRoute/noteRoute');

router.use(noteRoutes);

module.exports = router;