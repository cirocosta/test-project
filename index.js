'use strict';

let express = require('express');
let app = express();
const PORT = 1337;

app.get('/_ping', (req, res) => {
  res.send('pong');
});

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log('Example app listening on port ' + PORT);
});

