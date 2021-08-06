const http = require("http");
const PORT = 3000;

const httpSeverHandler = require("../app.js");
const server = http.createServer((req, res) => {
  console.log("请求了");
  console.log(httpSeverHandler);
  httpSeverHandler(req, res);
});
server.listen(PORT);
