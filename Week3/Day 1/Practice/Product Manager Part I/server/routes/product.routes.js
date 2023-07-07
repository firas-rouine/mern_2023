const controller = require("../controllers/product.controller")

module.exports =(app)=>{
    app.get("/api/products",controller.readAll);
    app.get("/api/products/:id",controller.getOne);
    app.post("/api/products",controller.create);
    app.put("/api/products/:id",controller.update);
    app.delete("/api/products/:id",controller.delete);

}