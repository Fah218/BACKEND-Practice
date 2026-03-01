const express = require('express');
const router = express.Router();

// GET all birds
router.get('/', (req, res) => {
  res.send("Birds Home Page");
});

// POST create bird
router.post('/', (req, res) => {
  res.json({
    message: "New bird created",
    data: {
      name: "Parrot",
      color: "Green"
    }
  });
});

// PUT update bird by id
router.put('/bd/:id', (req, res) => {
  const birdId = req.params.id;
  res.send(`Bird with ID ${birdId} updated`);
});

// DELETE bird by id
router.delete('/:id', (req, res) => {
  const birdId = req.params.id;
  res.send(`Bird with ID ${birdId} deleted`);
});

module.exports = router;