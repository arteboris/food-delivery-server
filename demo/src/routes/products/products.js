const url = require('url');
const fs = require('fs');
const path = require('path');

const getId = url => {
    const lastIndex = url.lastIndexOf('/');

    if( lastIndex !== -1) {
        return url.slice(lastIndex + 1);
    }
};

const sendProducts = ( request, response) => {
    const filePath = path.join(__dirname, '../../', 'db', 'products', 'all-products.json');
    
    const allProducts = fs.readFileSync(filePath, 'utf8');

    const parsedUrl = url.parse(request.url);
    
    const id = getId(parsedUrl.path);
 



};

module.exports = sendProducts;
