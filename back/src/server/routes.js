const express = require('express');
const product = require('./models/product');
const router = express.Router();

// Product Model
const Product = require('./models/product');

// GET all Products
router.get('/catalogo', async (req, res) => {
  const Products = await product.find();
  res.json(Products);
});

// GET a Product
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

// ADD a new Product
router.post('/add', async (req, res) => {
  const { category, title, description, imgUrl, price, amount } = req.body;
  const product = new Product({category, title, description, imgUrl, price, amount});
  await product.save();
  res.json({status: 'Product Saved'});
});

// UPDATE a new Product
router.put('/:id', async (req, res) => {
  const {category, title, description, imgUrl, price, amount } = req.body;
  const newProduct = {category, title, description, imgUrl, price, amount};
  await Product.findByIdAndUpdate(req.params.id, newProduct);
  res.json({status: 'Product Updated'});
});

router.delete('/:id', async (req, res) => {
  await Product.findByIdAndRemove(req.params.id);
  res.json({status: 'Product Deleted'});
});

module.exports = router;