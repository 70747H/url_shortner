import app from '../app.js';
import http from 'http';

const port = normalizePort(process.env.PORT || '3333');
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => {
    console.log('server is listening on port: ', port);
})

function normalizePort(val) {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  }