const http = require('node:http');

function add(a, b) {
  return a + b;
}

if (require.main === module) {
  http
    .createServer((req, res) => res.end('Hello from CI/CD\n'))
    .listen(3000, () => console.log('Listening on :3000'));
}

module.exports = { add };
