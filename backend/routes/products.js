const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Create a new product
router.post('/postproducts', (req, res) => {
  const { name, price, description, discount, type, imgUrl } = req.body;
  const newProduct = new Product({
    name,
    price,
    description,
    discount,
    type,
    imgUrl
  });

  newProduct.save()
    .then(product => res.json(product))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Get all products
router.get('/getproducts', (req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Get a single product by ID
router.get('/getproducts/:id', (req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

// Update a product by ID
router.put('/editproducts/:id', (req, res) => {
  Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(product => {
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json(product);
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

// Delete a product by ID
router.delete('/deleteproducts/:id', (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(product => {
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json({ success: true });
    })
    .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = router;
