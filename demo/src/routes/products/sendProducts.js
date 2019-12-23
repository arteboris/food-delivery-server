const url = require('url');
const fs = require('fs');
const path = require('path');
const queryString = require('query-string');

const getId = url => {
    const lastIndex = url.lastIndexOf('/');
    if( lastIndex === 0) {
        return 0;
    } else {
        return +url.slice(lastIndex + 1);
    }
};

const getAllProducts = filePath => {
    const getProducts = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(getProducts);
}

const getIds = query => {
    const qs = queryString.parse(query);
    return qs.ids.split(",");
}

const sendProducts = ( request, response) => {
    const parsedUrl = url.parse(request.url);

    const id = getId(request.url);

    const ids = getIds(parsedUrl.query);

    const filePath = path.join(__dirname, '../../', 'db', 'products', 'all-products.json');
    const allProducts = getAllProducts(filePath); 

 if (!ids) {
    if( id === 0 ) {
        response.writeHead(200, {'Conten-Type': 'application/json'});
        response.end(JSON.stringify({
            'status': 'success',
            'products': allProducts
        }, null, 2))
    }
    else if ( id > 0) {
        const product = allProducts.find(elem => elem.id === id)

        if (product === undefined) {
            response.writeHead(200, {'Conten-Type': 'application/json'});
            response.end(JSON.stringify({
                'status': 'no products',
                'products': []
            }, null, 2))
        } else {
            response.writeHead(200, {'Conten-Type': 'application/json'});
            response.end(JSON.stringify({
                'status': 'success',
                'products': [product]
            }, null, 2));
        };
    }};

    if (ids) {
        const products = allProducts.reduce((acc, elem) => {
                for(let id of ids){
                    if (id.includes(elem.id)) return acc = [...acc, elem];
                };
                return acc;
            }, []);

            console.log(products);

            if(products.lenght === 0){
                response.writeHead(200, {'Conten-Type': 'application/json'});
                response.end(JSON.stringify({
                    'status': 'no products',
                    'products': []
                }, null, 2));

            } else {
                response.writeHead(200, {'Conten-Type': 'application/json'});
                response.end(JSON.stringify({
                    'status': 'success',
                    'products': products
                }, null, 2));
            };
        };
};

module.exports = sendProducts;
