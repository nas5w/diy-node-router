const router = require('./src/diy-router');
const app = router();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/test-route', (req, res) => res.send('Testing testing'));
app.get('/user/:username', (req, res) => {
  const users = [
    { username: 'johndoe', name: 'John Doe' },
    { username: 'janesmith', name: 'Jane Smith' }
  ];

  const user = users.find(user => user.username === req.params.username);

  res.send(`Hello, ${user.name}!`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
