const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
var app = express();

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname +'/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname +'/public'));

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now} : ${req.method} ${req.url}`;
  fs.appendFile('server.log',log +'\n', (err)=>{
    if (err){
      console.log('Unable to append to server.log')
    }
  });
  next();
});


hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
})

hbs.registerHelper('screamIt', (text)=>{
  return text.toUpperCase();
})
app.get('/', (req, res) => {
  // res.send('<h1>Hello express</h1>');
  res.render('home.hbs', {
    pageTitle: 'Home page',
    welcomeMessage: 'Siema'
  })
});

app.get ('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About page',
  });
});
app.get ('/projects', (req, res) => {
  res.render('projects.hbs', {
    pageTitle: 'Projects page',
  });
});

app.get ('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to fetch request'
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
