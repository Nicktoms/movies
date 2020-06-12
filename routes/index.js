var express = require('express');
var router = express.Router();
const moviesController = require('../controllers/moviesController')

/* GET home page. */
router.get('/', moviesController.list);
router.get('/drama', moviesController.drama);
router.get('/top', moviesController.top);
router.get('/totalTime', moviesController.totalTime);
router.get('/:id', moviesController.detail);


module.exports = router;
