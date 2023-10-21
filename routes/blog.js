const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController')

router.get("/blog-stats", blogController.fetchData);

module.exports = router;