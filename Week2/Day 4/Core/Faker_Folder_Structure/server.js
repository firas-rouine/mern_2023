const express = require("express");
const app = express();

const { faker } = require('@faker-js/faker');
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
require("./routes/route.js")(app,faker)


app.listen(port, () => console.log(`Listening on port: ${port} 🚀`));