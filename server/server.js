const express = require("express");
const PORT = 3006;

const app = express();

const db = require('./db/index.js');

app.use(express.static(`${__dirname}/../public`));

app.get('/api/beers', (req, res) => {
  db.getAllItems().then(data=>res.send(data)).catch(err => console.log(err))
})

app.listen(PORT, console.log(`Server is now listening on ${PORT}`))

