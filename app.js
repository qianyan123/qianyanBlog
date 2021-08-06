const queryString = require("querystring");
const blogApiHandler = require("./router/blog.js");
const userApiHandler = require("./router/user.js");
const getBody = (req) => {
  return new Promise((resolve, reject) => {
    let postData = "";
    if (req.method === "GET") {
      resolve({});
    }
    req.on("data", (chunk) => {
      postData += chunk.toString();
    });
    req.on("end", () => {
      resolve(JSON.parse(postData));
    });
  });
};
const httpSeverHandler = (req, res) => {
  req.path = req.url.split("?")[0];
  req.query = queryString.parse(req.url.split("?")[1]);
  res.setHeader("Content-Type", "application/json");
  console.log("请求了");
  getBody(req).then((body) => {
    req.body = body;
    let userData;
    let blogData = blogApiHandler(req);
    if (!blogData) {
      userData = userApiHandler(req);
    }

    // let resData = blogData || userData
    // res.writeHead

    if (!blogData && !userData) {
      res.writeHead(404);
      res.end("404 NOT FOUND!");
    }
  });
};

module.exports = httpSeverHandler;
