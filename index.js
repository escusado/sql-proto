var Mysql = require("mysql");

console.log("Service starting fooooooool!!! 💩");

var connection = Mysql.createConnection({
  host: "localhost",
  user: "foo",
  password: "bar",
  database: "proto",
  port: 3306,
});

connection.connect();

connection.query("SELECT * from proto", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results);
});

connection.end();
