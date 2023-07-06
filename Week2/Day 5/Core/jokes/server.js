const express = require("express");
const app = express();
const port = 8000;

// MIDDLEWARE ==============
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
//============================

require("./config/mongoose.config")
    
const AllMyJokesRoutes = require("./routes/jokes.routes");
AllMyJokesRoutes(app);
    


app.listen( port, () => console.log(`Listening on port: ${port} 🚀`) );