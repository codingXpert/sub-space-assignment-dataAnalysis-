const express = require('express');
const router = express.Router();

router.use("/api", require('./blog'));

module.exports = router;