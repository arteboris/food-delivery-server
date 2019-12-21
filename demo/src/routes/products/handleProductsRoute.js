const sendProducts = require('./products');
const createProduct = require('./create-product');

const handleProductsRoute = ( request, response ) => {
    const reqMethod = request.method;

    if ( reqMethod === 'GET') {
        sendProducts( request, response);
        return;
    }

    if (reqMethod === 'POST') {
        createProduct( request, response);
        return;
    }
}

module.exports = handleProductsRoute;