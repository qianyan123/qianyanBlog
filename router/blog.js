const { getList } = require("../controller/blog.js");
const blogApiHandler = (req) => {
  if ((req.method === "GET", req.path === "/api/blog/list")) {
    return getList();
  }
};

module.export = blogApiHandler;
