const fs = require('fs');
const path = require('path');

const saveProduct =(product, response) => {
    const productPath = path.join(__dirname, '../../', 'db', 'products', 'all-products.json');
    
  fs.writeFile(productPath, JSON.stringify(product), function(err){
    if(err) throw err;

    fs.readFile(productPath, (err, data) => {
      if(err) throw err;

      const product = JSON.parse(data);

      response.writeHead(201, {'Content-Type': 'application/json'});
      response.end(JSON.stringify({
        'status': 'success',
        'user': user
      }))
    })
  })
}