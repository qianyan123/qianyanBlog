const http = require("http");

const PORT = 3000;

const httpSeverHandler = require("../app.js");
const server = http.createServer(httpSeverHandler);
server.listen(PORT);
