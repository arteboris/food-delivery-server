const mainRoute = require('./main/main');
const carRoute = require('./car/car');
const handleProductsRoute = require('./products/handleProductsRoute');
const signUpRoute = require('./users/signup');

const router = {
    '/signup': signUpRoute,
    '/car': carRoute,
    '/products': handleProductsRoute,
    default: mainRoute,
};

module.exports = router;