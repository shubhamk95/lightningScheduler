var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/cancelAppointment', function(req, res, next) {
  res.render('cancelAppointment', {page:'Cancel Appointment', menuId:''});
});

router.get('/modifyAppointment', function(req, res, next) {
  res.render('modifyAppointment', {page:'Modify Appointment', menuId:''});
});

module.exports = router;
