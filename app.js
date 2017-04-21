const express = require('express');
const app = express();

app.use('/public', express.static('public'))

app.get('/', (req, res) => {
  res.render('index.pug', {title: 'Jonathan'});
});

app.listen(3000);
