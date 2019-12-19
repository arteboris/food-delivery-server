const mainRoute = require('./main/main');
const carRoute = require('./car/car');
const productsRoute = require('./products/products');
const signUpRoute = require('./users/signup');

const router = {
    '/signup': signUpRoute,
    '/car': carRoute,
    '/products': productsRoute,
    default: mainRoute,
};

module.exports = router;