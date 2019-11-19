const express = require('express');
// const logger = require('morgan');
const path = require('path');
const compression = require('compression');
const app = express();

// app.use(logger('dev'));
app.use(express.static('./dist'));
app.use('/static', express.static('ui'));
app.use( compression() )
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './dist', 'index.html'));
});
const PORT = 3000;

console.log(PORT);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
