const http = require('http');
const url = require('url');

const morgan = require('morgan');
const logger = morgan('combined');
const router = require('./routes/router');
const getRouteHandler = require('./helpers/get-route-handler');

const startServer = port => {
    const server = http.createServer((request, response) => {
        // Get route from the request
        const parseUrl = url.parse(request.url);
        
        // Get router function
        const funkRouter = getRouteHandler(router, parsedUrl.pathname) || router.default;
        logger(request, response, () => funkRouter(request, response));
    });

    server.listen(port);
}

module.exports = startServer;