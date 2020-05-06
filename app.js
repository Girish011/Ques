const express = require("express");

const mongoose = require('mongoose');

const app = express();


app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/WikiDB", {
  useNewUrlParser: true
});

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

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
