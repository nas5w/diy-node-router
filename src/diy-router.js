const http = require('http');
const Route = require('route-parser');

const routes = [];

const addRoute = (method, route, handler) => {
  routes.push({ method, route, handler });
};

const get = (route, handler) => addRoute('get', route, handler);
const post = (route, handler) => addRoute('post', route, handler);

const router = () => {
  const listen = async port => {
    return http
      .createServer(async (req, res) => {
        res.write('Hello World!');
        res.end();
      })
      .listen(port);
  };

  return {
    get,
    post,
    listen
  };
};

module.exports = router;
