const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const { resolve } = require('path');
const { dbTest } = require('./conn')




const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/login', (req, res) => {
  res.send({ 
    reply: req.body.reply,
    user: req.body.user,
    message: "login success"
  });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.get('/api/dbTest', dbTest)






app.listen(port, () => console.log(`Listening on port ${port}`));