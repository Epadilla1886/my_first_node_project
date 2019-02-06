const express = require('express');

const server = express();

server.get('/', (request, response)=> {
    console.log('This is the home route!');

    response.send('<h1>My Awesome Node Site!</h1>');
});
server.get('/api/user', (req, res)=>{
   const user = {
       name: 'ISAC',
       occupation: 'AI',
       age: 3,
       email: 'SHD.gov'
   };

   res.send(user);
});

server.listen(9000, () => {
    console.log('Server running at localhost:', 9000);
});


