const express = require('express');

var app = express();

app.get('/', (req,res) => {
  res.status(404).send({error: 'page not found.', name: 'todo_apps'});
})

app.get('/users', (req,res) => {
  var users = [{
    name:'Alex',
    age:20
  },{
    name:'Patryk',
    age:10
  },{
    name:'Adam',
    age:10
  }];
  res.send(users);
})

app.listen(3000);

module.exports.app = app;
