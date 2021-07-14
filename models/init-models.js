var DataTypes = require("sequelize").DataTypes;
var _answer = require("./answer");
var _cart = require("./cart");
var _comment = require("./comment");
var _customer = require("./customer");
var _deliveryAddress = require("./deliveryAddress");
var _like = require("./like");
var _option = require("./option");
var _optionOrder = require("./optionOrder");
var _place = require("./place");
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
  var cart = _cart(sequelize, DataTypes);
  var comment = _comment(sequelize, DataTypes);
  var customer = _customer(sequelize, DataTypes);
  var deliveryAddress = _deliveryAddress(sequelize, DataTypes);
  var like = _like(sequelize, DataTypes);
  var option = _option(sequelize, DataTypes);
  var optionOrder = _optionOrder(sequelize, DataTypes);
  var place = _place(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var productDescription = _productDescription(sequelize, DataTypes);
  var productImage = _productImage(sequelize, DataTypes);
  var productionAddress = _productionAddress(sequelize, DataTypes);
  var question = _question(sequelize, DataTypes);
  var review = _review(sequelize, DataTypes);
  var reviewImage = _reviewImage(sequelize, DataTypes);
  var seller = _seller(sequelize, DataTypes);
  var totalOrder = _totalOrder(sequelize, DataTypes);

  customer.belongsToMany(place, { as: 'Place_id_Places', through: deliveryAddress, foreignKey: "Customer_id", otherKey: "Place_id" });
  customer.belongsToMany(product, { as: 'Product_id_Products', through: like, foreignKey: "Customer_id", otherKey: "Product_id" });
  option.belongsToMany(option, { as: 'Option_Product_id_Options', through: optionOrder, foreignKey: "Option_id", otherKey: "Option_Product_id" });
  option.belongsToMany(option, { as: 'Option_id_Options', through: optionOrder, foreignKey: "Option_Product_id", otherKey: "Option_id" });
  place.belongsToMany(customer, { as: 'Customer_id_Customers', through: deliveryAddress, foreignKey: "Place_id", otherKey: "Customer_id" });
  product.belongsToMany(customer, { as: 'Customer_id_Customer_Likes', through: like, foreignKey: "Product_id", otherKey: "Customer_id" });
  productionAddress.belongsToMany(seller, { as: 'Seller_id_Sellers', through: product, foreignKey: "ProductionAddress_id", otherKey: "Seller_id" });
  seller.belongsToMany(productionAddress, { as: 'ProductionAddress_id_ProductionAddresses', through: product, foreignKey: "Seller_id", otherKey: "ProductionAddress_id" });
  cart.belongsTo(customer, { as: "Customer", foreignKey: "Customer_id"});
  customer.hasMany(cart, { as: "Carts", foreignKey: "Customer_id"});
  deliveryAddress.belongsTo(customer, { as: "Customer", foreignKey: "Customer_id"});
  customer.hasMany(deliveryAddress, { as: "DeliveryAddresses", foreignKey: "Customer_id"});
  like.belongsTo(customer, { as: "Customer", foreignKey: "Customer_id"});
  customer.hasMany(like, { as: "Likes", foreignKey: "Customer_id"});
  totalOrder.belongsTo(customer, { as: "Customer", foreignKey: "Customer_id"});
  customer.hasMany(totalOrder, { as: "TotalOrders", foreignKey: "Customer_id"});
  totalOrder.belongsTo(deliveryAddress, { as: "DeliveryAddress", foreignKey: "DeliveryAddress_id"});
  deliveryAddress.hasMany(totalOrder, { as: "TotalOrders", foreignKey: "DeliveryAddress_id"});
  totalOrder.belongsTo(deliveryAddress, { as: "DeliveryAddress_Place", foreignKey: "DeliveryAddress_Place_id"});
  deliveryAddress.hasMany(totalOrder, { as: "DeliveryAddress_Place_TotalOrders", foreignKey: "DeliveryAddress_Place_id"});
  totalOrder.belongsTo(deliveryAddress, { as: "DeliveryAddress_Customer", foreignKey: "DeliveryAddress_Customer_id"});
  deliveryAddress.hasMany(totalOrder, { as: "DeliveryAddress_Customer_TotalOrders", foreignKey: "DeliveryAddress_Customer_id"});
  totalOrder.belongsTo(deliveryAddress, { as: "DeliveryAddress_Customer_Place", foreignKey: "DeliveryAddress_Customer_Place_id"});
  deliveryAddress.hasMany(totalOrder, { as: "DeliveryAddress_Customer_Place_TotalOrders", foreignKey: "DeliveryAddress_Customer_Place_id"});
  optionOrder.belongsTo(option, { as: "Option", foreignKey: "Option_id"});
  option.hasMany(optionOrder, { as: "OptionOrders", foreignKey: "Option_id"});
  optionOrder.belongsTo(option, { as: "Option_Product", foreignKey: "Option_Product_id"});
  option.hasMany(optionOrder, { as: "Option_Product_OptionOrders", foreignKey: "Option_Product_id"});
  cart.belongsTo(optionOrder, { as: "OptionOrder", foreignKey: "OptionOrder_id"});
  optionOrder.hasMany(cart, { as: "Carts", foreignKey: "OptionOrder_id"});
  cart.belongsTo(optionOrder, { as: "OptionOrder_Option", foreignKey: "OptionOrder_Option_id"});
  optionOrder.hasMany(cart, { as: "OptionOrder_Option_Carts", foreignKey: "OptionOrder_Option_id"});
  cart.belongsTo(optionOrder, { as: "OptionOrder_Option_Product", foreignKey: "OptionOrder_Option_Product_id"});
  optionOrder.hasMany(cart, { as: "OptionOrder_Option_Product_Carts", foreignKey: "OptionOrder_Option_Product_id"});
  cart.belongsTo(optionOrder, { as: "OptionOrder_Option_Product_Seller", foreignKey: "OptionOrder_Option_Product_Seller_id"});
  optionOrder.hasMany(cart, { as: "OptionOrder_Option_Product_Seller_Carts", foreignKey: "OptionOrder_Option_Product_Seller_id"});
  totalOrder.belongsTo(optionOrder, { as: "OptionOrder", foreignKey: "OptionOrder_id"});
  optionOrder.hasMany(totalOrder, { as: "TotalOrders", foreignKey: "OptionOrder_id"});
  totalOrder.belongsTo(optionOrder, { as: "OptionOrder_Option", foreignKey: "OptionOrder_Option_id"});
  optionOrder.hasMany(totalOrder, { as: "OptionOrder_Option_TotalOrders", foreignKey: "OptionOrder_Option_id"});
  totalOrder.belongsTo(optionOrder, { as: "OptionOrder_Option_Product", foreignKey: "OptionOrder_Option_Product_id"});
  optionOrder.hasMany(totalOrder, { as: "OptionOrder_Option_Product_TotalOrders", foreignKey: "OptionOrder_Option_Product_id"});
  totalOrder.belongsTo(optionOrder, { as: "OptionOrder_Option_Product_Seller", foreignKey: "OptionOrder_Option_Product_Seller_id"});
  optionOrder.hasMany(totalOrder, { as: "OptionOrder_Option_Product_Seller_TotalOrders", foreignKey: "OptionOrder_Option_Product_Seller_id"});
  deliveryAddress.belongsTo(place, { as: "Place", foreignKey: "Place_id"});
  place.hasMany(deliveryAddress, { as: "DeliveryAddresses", foreignKey: "Place_id"});
  productionAddress.belongsTo(place, { as: "Place", foreignKey: "Place_id"});
  place.hasMany(productionAddress, { as: "ProductionAddresses", foreignKey: "Place_id"});
  like.belongsTo(product, { as: "Product", foreignKey: "Product_id"});
  product.hasMany(like, { as: "Likes", foreignKey: "Product_id"});
  option.belongsTo(product, { as: "Product", foreignKey: "Product_id"});
  product.hasMany(option, { as: "Options", foreignKey: "Product_id"});
  productDescription.belongsTo(product, { as: "Product", foreignKey: "Product_id"});
  product.hasMany(productDescription, { as: "ProductDescriptions", foreignKey: "Product_id"});
  productImage.belongsTo(product, { as: "Product", foreignKey: "Product_id"});
  product.hasMany(productImage, { as: "ProductImages", foreignKey: "Product_id"});
  review.belongsTo(product, { as: "Product", foreignKey: "Product_id"});
  product.hasMany(review, { as: "Reviews", foreignKey: "Product_id"});
  product.belongsTo(productionAddress, { as: "ProductionAddress", foreignKey: "ProductionAddress_id"});
  productionAddress.hasMany(product, { as: "Products", foreignKey: "ProductionAddress_id"});
  answer.belongsTo(question, { as: "Question", foreignKey: "Question_id"});
  question.hasMany(answer, { as: "Answers", foreignKey: "Question_id"});
  answer.belongsTo(question, { as: "Question_Review", foreignKey: "Question_Review_id"});
  question.hasMany(answer, { as: "Question_Review_Answers", foreignKey: "Question_Review_id"});
  answer.belongsTo(question, { as: "Question_Review_Product", foreignKey: "Question_Review_Product_id"});
  question.hasMany(answer, { as: "Question_Review_Product_Answers", foreignKey: "Question_Review_Product_id"});
  answer.belongsTo(question, { as: "Question_Review_Product_Seller", foreignKey: "Question_Review_Product_Seller_id"});
  question.hasMany(answer, { as: "Question_Review_Product_Seller_Answers", foreignKey: "Question_Review_Product_Seller_id"});
  comment.belongsTo(review, { as: "Review", foreignKey: "Review_id"});
  review.hasMany(comment, { as: "Comments", foreignKey: "Review_id"});
  comment.belongsTo(review, { as: "Review_Product", foreignKey: "Review_Product_id"});
  review.hasMany(comment, { as: "Review_Product_Comments", foreignKey: "Review_Product_id"});
  comment.belongsTo(review, { as: "Review_Product_Seller", foreignKey: "Review_Product_Seller_id"});
  review.hasMany(comment, { as: "Review_Product_Seller_Comments", foreignKey: "Review_Product_Seller_id"});
  question.belongsTo(review, { as: "Review", foreignKey: "Review_id"});
  review.hasMany(question, { as: "Questions", foreignKey: "Review_id"});
  question.belongsTo(review, { as: "Review_Product", foreignKey: "Review_Product_id"});
  review.hasMany(question, { as: "Review_Product_Questions", foreignKey: "Review_Product_id"});
  question.belongsTo(review, { as: "Review_Product_Seller", foreignKey: "Review_Product_Seller_id"});
  review.hasMany(question, { as: "Review_Product_Seller_Questions", foreignKey: "Review_Product_Seller_id"});
  reviewImage.belongsTo(review, { as: "Review", foreignKey: "Review_id"});
  review.hasMany(reviewImage, { as: "ReviewImages", foreignKey: "Review_id"});
  product.belongsTo(seller, { as: "Seller", foreignKey: "Seller_id"});
  seller.hasMany(product, { as: "Products", foreignKey: "Seller_id"});

  return {
    answer,
    cart,
    comment,
    customer,
    deliveryAddress,
    like,
    option,
    optionOrder,
    place,
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
