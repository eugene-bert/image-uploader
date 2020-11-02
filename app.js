var express = require("express");
var mongoose = require("mongoose");

// Require Router
var helloWorldRoutes = require("./routes/helloWorld");

const app = express();

app.use(require("body-parser").urlencoded({ extended: false }));
app.use(require("body-parser").json({ limit: "50mb" }));

app.set("view engine", "ejs");

app.use(express.static("public"));
mongoose.connect(
  "mongodb://EkkuTelia:Ekku***@ds125372.mlab.com:25372/telia-assignment",
  { useMongoClient: true }
);

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/helloWorld", helloWorldRoutes);

app.get("*", (req, res) => {
  res.render("index");
});

app.listen(process.env.PORT || "3000", process.env.IP, function() {
  console.log("The app is run on 3000");
});
