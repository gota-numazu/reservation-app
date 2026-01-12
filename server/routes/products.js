const express = require("express");
const router = express.Router();
const Product = require("../model/product");

router.get("/", async function (req, res) {
  const products = await Product.find({});
  return res.json(products);
});

router.get("/:productId", async function (req, res) {
  let foundProduct;
  try {
    const productId = req.params.productId;
    foundProduct = await Product.findById(productId);
  } catch (err) {
    return res.status(422).send({
      errors: [{ title: "Product error", detail: "Product not found" }],
    });
  }

  return res.json(foundProduct);
});

module.exports = router;
