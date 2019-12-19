const fs = require('fs');
const path = require('path');

const productsRoute = ( request, response) => {
    const filePath = path.join(__dirname, '../../', 'db', 'products', 'all-products.json');
    const products = fs.readFileSync(filePath, 'utf8');

    response.writeHead(200, {
        'Content-Type': 'application/json'
    });

    response.end(products);

};

module.exports = productsRoute; 