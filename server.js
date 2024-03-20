const http = require("http");

const HOSTNAME = "localhost";
const PORT = 8000;

function requestHandler(req, res) {
  if (req.url == "/book" && req.method == "GET") {
    res.end("This is a GET request");
  } else if (req.url == "/book" && req.method == "POST") {
    res.end("This is a POST request");
  } else if (req.url == "/book" && req.method == "PUT") {
    res.end("This is a PUT request");
  } else if (req.url == "/book" && req.method == "DELETE") {
    res.end("This is a DELETE request");
  }
}

const server = http.createServer(requestHandler);
server.listen(PORT, HOSTNAME, () => {
  console.log(`Server started sucessfully at https:${HOSTNAME}:${PORT}`);
});
