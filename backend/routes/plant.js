const express = require("express");
const router = express.Router();
const {
  getPlants,
  plantDetails,
  createPlant,
  updatePlant,
  deletePlant,
} = require("../controllers/PlantController");

router.get("/", getPlants);
router.get("/:id", plantDetails);
router.post("/", createPlant);
router.put("/:id", updatePlant);
router.delete("/:id", deletePlant);

module.exports = router;
