const router = require('./src/diy-router');
const app = router();
const port = 3000;

//app.get('/', (req, res) => res.send('Hello World!'));

app
  .listen(port)
  .then(() => console.log(`Example app listening on port ${port}!`));
