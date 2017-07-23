const express = require('express');
const app = express();
const fs = require('fs');

app.use('/public', express.static('public'))

app.get('/', (req, res) => {
  res.render('index.pug', {title: 'Jonathan'});
});

fs.readFile('my_data.csv','utf8', function(err, data){
  json(data);
  data.forEach( function(hi){
    console.log(hi)
  })
});
  
app.listen(3000);
