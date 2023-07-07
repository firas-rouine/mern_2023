const express = require('express');
const app = express();
const cors = require("cors")


// load .env vars
require('dotenv').config(); 
app.use(cors())

// middleware
app.use(express.json(), express.urlencoded({ extended: true }));
const port = process.env.PORT

// Require / import the file

require("./config/mongoose.config");
require("./routes/product.routes")(app);


app.listen(port, () => console.log(`Listening on port ${port} for REQuests to RESpond to.`));