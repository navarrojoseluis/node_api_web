var express = require('express');

var app = express();
app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello World!');
});
  
app.listen(3000, function () {
    console.log('Listening on port 3000!');
});
 