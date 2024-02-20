const http = require("http");
const internData = require("../server/data/information.json")

const port = "4000"

http.createServer((req, res) => {
  console.log("server running in", port);
  res.write(JSON.stringify(internData))
  res.end()
}).listen(port);
