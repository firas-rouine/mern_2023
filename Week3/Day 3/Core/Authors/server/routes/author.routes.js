const controllers = require("../controllers/author.contoller")


module.exports =(app) =>{
    app.get("/api/authors", controllers.FindAll);
    app.post("/api/authors", controllers.create);
    app.get("/api/authors/:id", controllers.findOne);
    app.put("/api/authors/:id", controllers.update);
    app.delete("/api/authors/:id", controllers.delete);
}