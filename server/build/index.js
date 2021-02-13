"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _api = _interopRequireDefault(require("./routes/api"));

var _mysql = _interopRequireDefault(require("./db/mysql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = 8080;
app.use(_bodyParser["default"].json());
app.use("/api", _api["default"]);
/*
var sql = "SELECT * FROM test";
conn.query(sql, (err, results, fields) => {
  if (err) console.log(err);

  console.log(results);
});*/

app.listen(port, function () {
  console.log("Express is listening on port a", port);
});