var http = require("http");
var url = require("url");
var fs = require("fs");
var PORT = process.env.PORT || 8080;
var HOST = "127.0.0.1";

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            console.log(err); // returns the error to the server too. in terminal
            return res.end("404 NOT FOUND!");
        } else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);

            return res.end();
        }
    })
}).listen(PORT, HOST, () => console.log(`Server running on port: http://${HOST}:${PORT}/index.html`));