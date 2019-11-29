const mainRoute = (request, response) => {

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h2>Hello Word!!!!</h2>");
    response.end();
};

module.exports = mainRoute;