const express = require("express");
const router = express.Router();
const {
  getAllPlants,
  plantDetails,
  createPlant,
  updatePlant,
  deletePlant,
} = require("../controllers/PlantController");

router.get("/", getAllPlants);
router.get("/:id", plantDetails);
router.post("/", createPlant);
router.put("/:id", updatePlant);
router.delete("/:id", deletePlant);

module.exports = router;
