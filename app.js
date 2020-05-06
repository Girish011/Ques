const express = require("express");

const mongoose = require('mongoose');

const app = express();


app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/WikiDB", { useUnifiedTopology: true } );

const articleSchema = {
  questions: String,
  answers: [String],
  correctIndex: Number
}

const Article = mongoose.model("Article", articleSchema)

app.get("/articles", function(req, res) {
  Article.find(function(err, foundArticles) {
    if (!err) {
      res.send(foundArticles);
    } else {
      res.send(err);
    }
  });
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}
// app.listen(port);
app.listen(port, function() {
  console.log("Server started successfully...!");
});
