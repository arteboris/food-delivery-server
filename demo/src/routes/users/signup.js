const fs = require('fs');
const path = require('path');

const saveUser = (user, response) => {
  const fileName = `${user.username.toLowerCase()}.json`;
  const usersPath = path.resolve(__dirname, '../../', 'db/users', fileName);

  fs.writeFile(usersPath, JSON.stringify(user), function(err){
    if(err) throw err;

    fs.readFile(usersPath, (err, data) => {
      if(err) throw err;

      const user = JSON.parse(data);

      response.writeHead(201, {'Content-Type': 'application/json'});
      response.end(JSON.stringify({
        'status': 'success',
        'user': user
      }))
    })
  })
};



const signUpRoute = (request, response) => {
  // Взять данные что пришли
  if (request.method === 'POST') {
    let body = '';
    request.on('data', function (data) {
      body = body + data;
    })
    request.on('end', function () {
      let newUserObj = JSON.parse(body);
      saveUser(newUserObj, response);
    });
  } else {
    response.writeHead(401, {'Content-Type': 'text/plain'});
    response.end();
  }

};

module.exports = signUpRoute;




