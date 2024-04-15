const express = require("express");

const app = express ();

app.get("/", (req, res) => {
    res.send('GO upper!')
})

app.get('/ping', (req, res) => {
    res.send('pong');
  });

app.listen(3000,() => console.log("Server started at http://localhost:3000/ping"));

