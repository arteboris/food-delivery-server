const fs = require('fs');
const path = require('path');

const saveProduct =(product, response) => {
    const filePath = path.join(__dirname, '../../', 'db', 'products', 'all-products.json');
    const allProducts = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const newAllProducts = [product, ...allProducts];

    fs.writeFile(filePath, JSON.stringify(newAllProducts), err => {
      
      if(err){
        response.writeHead(401, {'Conten-Type': 'text/plain'});
        response.end(err)
      };

      response.writeHead(201, {'Conten-Type': 'application/json'});
      response.end(JSON.stringify({
      'status': 'success',
      'product': product
        }, null, 2))
    });
};

const createProduct = (request, response) => {

    let body = '';
    request.on('data', function (data) {
      body = body + data;
    })
    request.on('end', function () {
      let product = JSON.parse(body);
      saveProduct(product, response);
    });
};

module.exports = createProduct;
