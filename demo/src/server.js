const http = require('http');
const url = require('url');

const morgan = require('morgan');
const logger = morgan('combined');
const router = require('./routes/router');

const startServer = port => {
    const server = http.createServer((request, response) => {
        const parseUrl = url.parse(request.url);
        const funkRouter = router[parseUrl.pathname] || router.default;
        logger(request, response, () => funkRouter(request, response));
    });

    server.listen(port);
}

module.exports = startServer;