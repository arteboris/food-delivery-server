const mainRoute = require('./main/main');
const carRoute = require('./car/car');
const productsRoute = require('./products/products');
const productRoute = require('./product/product');
const signUpRoute = require('./users/signup');

const router = {
    '/signup': signUpRoute,
    '/car': carRoute,
    '/products': productsRoute,
    '/product': productRoute,
    default: mainRoute,
};

module.exports = router;