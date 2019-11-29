const mainRoute = require('./main/main');
const carRoute = require('./car/car');
const productsRoute = require('./products/products');

const router = {
    '/car': carRoute,
    '/products': productsRoute,
    default: mainRoute,
};

module.exports = router;