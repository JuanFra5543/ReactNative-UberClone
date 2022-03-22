module.exports = (app) => {
    const favourite = require("../controllers/favourite.controller.js");
    let router = require("express").Router();

    router.post("/", favourite.create);
    router.get("/", favourite.allFavourites);
    router.put("/:id",favourite.update);
    router.delete("/:id",favourite.delete);

    app.use("/api/favourite", router);
};