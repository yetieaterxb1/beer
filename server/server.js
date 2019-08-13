const express = require("express");
const PORT = 3006;
const bodyParser = require('body-parser');

const app = express();

const db = require('./db/index.js');
app.use(bodyParser());

app.use(express.static(`${__dirname}/../public`));

app.get('/api/beers', (req, res) => {
  db.getAllBeers().then(data=>res.send(data)).catch(err => console.log(err))
})
app.get('/api/breweries', (req, res) => {
  db.getAllBreweries().then(data=>res.send(data)).catch(err => console.log(err))
})
app.get('/api/categories', (req, res) => {
  db.getAllCategories().then(data=>res.send(data)).catch(err => console.log(err))
})
app.get('/api/styles', (req, res) => {
  db.getAllStyles().then(data=>res.send(data)).catch(err => console.log(err))
})
app.post('/api/addBeer', (req, res) => {
  db.addNewBeer(req.body)
  //db.query()
})
app.put('/api/updateBeer', (req, res) => {
  db.updateItem(req.body)
  //db.query()
})

app.listen(PORT, console.log(`Server is now listening on ${PORT}`))

