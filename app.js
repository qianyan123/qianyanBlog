const queryString = require("querystring");

const httpSeverHandler = (req, res) => {
  let method = req.method;
  let path = req.url.split("?")[0];
  let query = queryString.parse(req.url.split("?")[1]);
  res.setHeader("Content-Type", "application/json");
  let resData = {
    method,
    path,
    query,
  };
  if (method === "POST") {
    let postData = "";
    req.on("data", (chunk) => {
      postData += chunk.toString();
    });
    req.on("end", () => {
      console.log("postData", postData);
      res.end(JSON.stringify(resData));
    });
  }
  if (method === "GET") {
    res.end(JSON.stringify(resData));
  }
};

module.export = httpSeverHandler;
