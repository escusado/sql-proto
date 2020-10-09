const express = require("express");
const app = express();
const port = 4000;
const Mysql = require("mysql");
const fs = require("fs");

console.log("Service starting fooooooool!!! 💩");

var connection = Mysql.createConnection({
  host: "localhost",
  user: "foo",
  password: "bar",
  database: "proto",
  port: 3306,
});

connection.connect();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  let contents = fs.readFileSync("index.html", "utf8");

  res.send(contents);
});

app.get("/list", (req, res) => {
  connection.query("SELECT * from proto", function (error, results, fields) {
    if (error) throw error;
    // console.log("The solution is: ", results);
    res.send(results);
  });
});

app.post("/new", (req, res) => {
  console.log("req", req.body);

  connection.query(
    `INSERT INTO proto (title, author, age) VALUES ("${req.body.title}", "${req.body.author}", ${req.body.age});`,
    function (error, results, fields) {
      if (error) throw error;
      // console.log("The solution is: ", results);
      console.log(">>>> done!");
      res.send(results);
    }
  );
});

// app.post("/detail/id", (req, res) => {
//   // ???????
//   res.send(detail);
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
