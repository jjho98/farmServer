var DataTypes = require("sequelize").DataTypes;
var _answer = require("./answer");
var _cartItem = require("./cartItem");
var _comment = require("./comment");
var _customer = require("./customer");
var _deliveryAddress = require("./deliveryAddress");
var _like = require("./like");
var _option = require("./option");
var _optionOrder = require("./optionOrder");
var _product = require("./product");
var _productDescription = require("./productDescription");
var _productImage = require("./productImage");
var _productionAddress = require("./productionAddress");
var _question = require("./question");
var _review = require("./review");
var _reviewImage = require("./reviewImage");
var _seller = require("./seller");
var _totalOrder = require("./totalOrder");

function initModels(sequelize) {
  var answer = _answer(sequelize, DataTypes);
  var cartItem = _cartItem(sequelize, DataTypes);
  var comment = _comment(sequelize, DataTypes);
  var customer = _customer(sequelize, DataTypes);
  var deliveryAddress = _deliveryAddress(sequelize, DataTypes);
  var like = _like(sequelize, DataTypes);
  var option = _option(sequelize, DataTypes);
  var optionOrder = _optionOrder(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var productDescription = _productDescription(sequelize, DataTypes);
  var productImage = _productImage(sequelize, DataTypes);
  var productionAddress = _productionAddress(sequelize, DataTypes);
  var question = _question(sequelize, DataTypes);
  var review = _review(sequelize, DataTypes);
  var reviewImage = _reviewImage(sequelize, DataTypes);
  var seller = _seller(sequelize, DataTypes);
  var totalOrder = _totalOrder(sequelize, DataTypes);

  customer.belongsToMany(deliveryAddress, { as: 'DeliveryAddress_id_DeliveryAddresses', through: totalOrder, foreignKey: "Customer_id", otherKey: "DeliveryAddress_id" });
  customer.belongsToMany(product, { as: 'Product_id_Products', through: like, foreignKey: "Customer_id", otherKey: "Product_id" });
  deliveryAddress.belongsToMany(customer, { as: 'Customer_id_Customer_TotalOrders', through: totalOrder, foreignKey: "DeliveryAddress_id", otherKey: "Customer_id" });
  product.belongsToMany(customer, { as: 'Customer_id_Customers', through: like, foreignKey: "Product_id", otherKey: "Customer_id" });
  productionAddress.belongsToMany(seller, { as: 'Seller_id_Sellers', through: product, foreignKey: "ProductionAddress_id", otherKey: "Seller_id" });
  seller.belongsToMany(productionAddress, { as: 'ProductionAddress_id_ProductionAddresses', through: product, foreignKey: "Seller_id", otherKey: "ProductionAddress_id" });
  cartItem.belongsTo(customer, { as: "Customer", foreignKey: "Customer_id"});
  customer.hasMany(cartItem, { as: "CartItems", foreignKey: "Customer_id"});
  deliveryAddress.belongsTo(customer, { as: "Customer", foreignKey: "Customer_id"});
  customer.hasMany(deliveryAddress, { as: "DeliveryAddresses", foreignKey: "Customer_id"});
  like.belongsTo(customer, { as: "Customer", foreignKey: "Customer_id"});
  customer.hasMany(like, { as: "Likes", foreignKey: "Customer_id"});
  optionOrder.belongsTo(customer, { as: "Customer", foreignKey: "Customer_id"});
  customer.hasMany(optionOrder, { as: "OptionOrders", foreignKey: "Customer_id"});
  totalOrder.belongsTo(customer, { as: "Customer", foreignKey: "Customer_id"});
  customer.hasMany(totalOrder, { as: "TotalOrders", foreignKey: "Customer_id"});
  totalOrder.belongsTo(deliveryAddress, { as: "DeliveryAddress", foreignKey: "DeliveryAddress_id"});
  deliveryAddress.hasMany(totalOrder, { as: "TotalOrders", foreignKey: "DeliveryAddress_id"});
  cartItem.belongsTo(option, { as: "Option", foreignKey: "Option_id"});
  option.hasMany(cartItem, { as: "CartItems", foreignKey: "Option_id"});
  cartItem.belongsTo(option, { as: "Option_Product", foreignKey: "Option_Product_id"});
  option.hasMany(cartItem, { as: "Option_Product_CartItems", foreignKey: "Option_Product_id"});
  optionOrder.belongsTo(option, { as: "Option", foreignKey: "Option_id"});
  option.hasMany(optionOrder, { as: "OptionOrders", foreignKey: "Option_id"});
  optionOrder.belongsTo(option, { as: "Option_Product", foreignKey: "Option_Product_id"});
  option.hasMany(optionOrder, { as: "Option_Product_OptionOrders", foreignKey: "Option_Product_id"});
  like.belongsTo(product, { as: "Product", foreignKey: "Product_id"});
  product.hasMany(like, { as: "Likes", foreignKey: "Product_id"});
  option.belongsTo(product, { as: "Product", foreignKey: "Product_id"});
  product.hasMany(option, { as: "Options", foreignKey: "Product_id"});
  productDescription.belongsTo(product, { as: "Product", foreignKey: "Product_id"});
  product.hasMany(productDescription, { as: "ProductDescriptions", foreignKey: "Product_id"});
  productImage.belongsTo(product, { as: "Product", foreignKey: "Product_id"});
  product.hasMany(productImage, { as: "ProductImages", foreignKey: "Product_id"});
  question.belongsTo(product, { as: "Product", foreignKey: "Product_id"});
  product.hasMany(question, { as: "Questions", foreignKey: "Product_id"});
  question.belongsTo(product, { as: "Product_ProductionAddress", foreignKey: "Product_ProductionAddress_id"});
  product.hasMany(question, { as: "Product_ProductionAddress_Questions", foreignKey: "Product_ProductionAddress_id"});
  question.belongsTo(product, { as: "Product_Seller", foreignKey: "Product_Seller_id"});
  product.hasMany(question, { as: "Product_Seller_Questions", foreignKey: "Product_Seller_id"});
  review.belongsTo(product, { as: "Product", foreignKey: "Product_id"});
  product.hasMany(review, { as: "Reviews", foreignKey: "Product_id"});
  product.belongsTo(productionAddress, { as: "ProductionAddress", foreignKey: "ProductionAddress_id"});
  productionAddress.hasMany(product, { as: "Products", foreignKey: "ProductionAddress_id"});
  answer.belongsTo(question, { as: "Question", foreignKey: "Question_id"});
  question.hasMany(answer, { as: "Answers", foreignKey: "Question_id"});
  answer.belongsTo(question, { as: "Question_Product", foreignKey: "Question_Product_id"});
  question.hasMany(answer, { as: "Question_Product_Answers", foreignKey: "Question_Product_id"});
  answer.belongsTo(question, { as: "Question_Product_ProductionAddress", foreignKey: "Question_Product_ProductionAddress_id"});
  question.hasMany(answer, { as: "Question_Product_ProductionAddress_Answers", foreignKey: "Question_Product_ProductionAddress_id"});
  answer.belongsTo(question, { as: "Question_Product_Seller", foreignKey: "Question_Product_Seller_id"});
  question.hasMany(answer, { as: "Question_Product_Seller_Answers", foreignKey: "Question_Product_Seller_id"});
  comment.belongsTo(review, { as: "Review", foreignKey: "Review_id"});
  review.hasMany(comment, { as: "Comments", foreignKey: "Review_id"});
  comment.belongsTo(review, { as: "Review_Product", foreignKey: "Review_Product_id"});
  review.hasMany(comment, { as: "Review_Product_Comments", foreignKey: "Review_Product_id"});
  comment.belongsTo(review, { as: "Review_Product_Seller", foreignKey: "Review_Product_Seller_id"});
  review.hasMany(comment, { as: "Review_Product_Seller_Comments", foreignKey: "Review_Product_Seller_id"});
  reviewImage.belongsTo(review, { as: "Review", foreignKey: "Review_id"});
  review.hasMany(reviewImage, { as: "ReviewImages", foreignKey: "Review_id"});
  product.belongsTo(seller, { as: "Seller", foreignKey: "Seller_id"});
  seller.hasMany(product, { as: "Products", foreignKey: "Seller_id"});
  optionOrder.belongsTo(totalOrder, { as: "TotalOrder", foreignKey: "TotalOrder_id"});
  totalOrder.hasMany(optionOrder, { as: "OptionOrders", foreignKey: "TotalOrder_id"});
  optionOrder.belongsTo(totalOrder, { as: "TotalOrder_Customer", foreignKey: "TotalOrder_Customer_id"});
  totalOrder.hasMany(optionOrder, { as: "TotalOrder_Customer_OptionOrders", foreignKey: "TotalOrder_Customer_id"});

  return {
    answer,
    cartItem,
    comment,
    customer,
    deliveryAddress,
    like,
    option,
    optionOrder,
    product,
    productDescription,
    productImage,
    productionAddress,
    question,
    review,
    reviewImage,
    seller,
    totalOrder,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
