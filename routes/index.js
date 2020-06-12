var express = require('express');
var router = express.Router();
const moviesController = require('../controllers/moviesController')

/* GET home page. */
router.get('/', moviesController.list);
router.get('/drama', moviesController.drama);
router.get('/movies/top', moviesController.top);
router.get('/:id', moviesController.detail);


module.exports = router;
