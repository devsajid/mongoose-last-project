// const app = require('express')();

app.get("*", (req, res) => {
  req.query; // { color: ['black', 'yellow'] }
  res.json(req.query);
});

const server = await app.listen(3000);
// Demo of making a request to the server
const axios = require("axios");
const querystring = "?color=black&color=yellow";
const res = await axios.get("http://localhost:3000/" + querystring);

res.data;
