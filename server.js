const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static("dist"));
app.set('views', __dirname + '/dist');

app.set('view engine', 'html');

app.engine('html', require('ejs').renderFile);


app.get("/", (req, res) => {
  res.render("index");
});

app.get("*", (req, res) => {
  res.render("index");
});

app.listen(port);