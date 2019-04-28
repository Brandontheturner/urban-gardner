const express = require("express");
const router = express.Router();
const VegetablesController = require("../controllers/vegetables");

router.get("/vegetables", (req, res) => {
  VegetablesController.getAllVegetables().then(results => res.json(results));
});

router.get("/:name", (req, res) => {
  VegetablesController.getVegetableByName(req.params.name)
    .then(result => res.json(result))
    .catch(err => res.status(404).send(err.message));
});

module.exports = router;
