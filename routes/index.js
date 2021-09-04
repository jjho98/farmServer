const express = require("express");
const router = express.Router();

const auth = require("./auth");
const seller = require("./seller");
const delivery = require("./delivery");
const product = require("./product");
const user = require("./user");

router.use("/auth", auth);
router.use("/seller", seller);
router.use("/delivery", delivery);
router.use("/product", product);
router.use("/user", user);
router.use("/", (req, res, next) => {
  return res.status(200).json({ message: "check success" });
});

module.exports = router;
