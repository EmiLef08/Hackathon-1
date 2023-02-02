const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const villeControllers = require("./controllers/villeControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/villes", villeControllers.browse);
router.get("/villes/:id", villeControllers.read);

module.exports = router;
