var express = require('express');
var router = express.Router();

var grades = [
  {
    id: 1,
    name: 'Assad Saad',
    course: 'CS572',
    grade: '95'
  },
  {
    id: 2,
    name: 'Tarikye Taci',
    course: 'CS572',
    grade: '100'
  },
  {
    id: 3,
    name: 'Didu Dave',
    course: 'CS572',
    grade: '97'
  }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json(grades);
});

router.get('/:id', function(req, res, next) {
  //res.send('respond with a resource');
  
  res.json(grades[req.params.id]);
});


router.post('/', function(req, res, next) {
  //res.send('respond with a resource');
  res.json(grades[req.params.id]);
});

router.put('/:id', function(req, res, next) {
  //res.send('respond with a resource');
  res.json(grades[req.params.id]);
});

router.delete('/:id', function(req, res, next) {
  //res.send('respond with a resource');
  const index = grades.findIndex()
  res.json(grades);
});


module.exports = router;
