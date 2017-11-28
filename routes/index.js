var express = require('express');
var router = express.Router();
var app = express();
var controllerMongoCollection = require('../controllers/database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/storeData', controllerMongoCollection.storeData);
app.post('/storeData', controllerMongoCollection.storeData);

module.exports = router;
