const server = require('./server.js');
require('dotenv').config();
const colors = require('colors');
const PORT = process.env.PORT;
const MODE = process.env.NODE_ENV;

server.listen(PORT, () => {
  console.log(`\n === Server Listening in ${MODE} mode on http://localhost:${PORT} === \n`.magenta.bold.underline);
});