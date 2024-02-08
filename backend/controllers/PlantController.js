const Plant = require('../models/plant');
const cloudinary = require('cloudinary').v2;

exports.getPlants = async (req, res) => {
  try {
    const plants = await Plant.find();
    if (!plants) {
      return res.status(404).json({
        success: false,
        message: 'Plants not found',
      });
    }
    res.status(200).json({
      success: true,
      plants,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.plantDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const plant = await Plant.findById(id);
    if (!plant) {
      return res.status(404).json({
        success: false,
        message: 'Plant not found',
      });
    }
    res.status(200).json({
      success: true,
      plant,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createPlant = async (req, res) => {
  let images = [];
  if (typeof req.body.images === 'string') {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  let imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    let imageDataUri = images[i];
    try {
      const result = await cloudinary.uploader.upload(`${imageDataUri}`, {
        folder: 'plants',
        width: 150,
        crop: 'scale',
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    } catch (error) {
      console.log(error);
      // Handle error appropriately
    }
  }

  req.body.images = imagesLinks;
  req.body.user = req.user.id;

  const plant = await Plant.create(req.body);
  if (!plant) {
    return res.status(400).json({
      success: false,
      message: 'Plant not created',
    });
  }

  res.status(201).json({
    success: true,
    plant,
  });
};

const Plant = require('../models/plant');
const cloudinary = require('cloudinary').v2;

exports.updatePlant = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    description,
    color,
    waterFrequency,
    lightExposure,
    temperature,
    fruitColor,
    soilNutrient,
    humidity,
  } = req.body;

  try {
    let updatedPlant = await Plant.findById(id);
    if (!updatedPlant) {
      return res.status(404).json({
        success: false,
        message: 'Plant not found',
      });
    }

    // Handle image update logic
    let images = [];

    if (typeof req.body.images === 'string') {
      images.push(req.body.images);
    } else {
      images = req.body.images;
    }

    try {
      // Deleting existing images associated with the plant
      for (let i = 0; i < updatedPlant.images.length; i++) {
        try {
          let imageDataUri = updatedPlant.images[i];
          const result = await cloudinary.uploader.destroy(`${imageDataUri.public_id}`);
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }

    let imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      try {
        let imageDataUri = images[i];
        const result = await cloudinary.uploader.upload(`${imageDataUri}`, {
          folder: 'plants',
          width: 150,
          crop: 'scale',
        });
        imagesLinks.push({
          public_id: result.public_id,
          url: result.secure_url,
        });
      } catch (error) {
        console.log(error);
      }
    }

    // Update the plant details including the new images
    updatedPlant = await Plant.findByIdAndUpdate(
      id,
      {
        name,
        description,
        color,
        water,
        light,
        temperature,
        soil,
        humidity,
        images: imagesLinks,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      plant: updatedPlant,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.deletePlant = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPlant = await Plant.findByIdAndDelete(id);
    if (!deletedPlant) {
      return res.status(404).json({
        success: false,
        message: 'Plant not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Plant deleted successfully',
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
