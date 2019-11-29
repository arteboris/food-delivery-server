const fs = require('fs');
const path = require('path');


const carRoute = (request, response) => {
    const filePath = path.join(__dirname, '../../../', 'assets', 'pexels-photo-1592384.jpg');
    const image = fs.statSync(filePath);

    response.writeHead(200, 
        {'Content-Type': 'image/jpeg',
         'Content-Length': image.size
        });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(response);

};

module.exports = carRoute;