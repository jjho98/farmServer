var DataTypes = require("sequelize").DataTypes;
var _Answer = require("./answer");
var _CartItem = require("./cartItem");
var _Comment = require("./comment");
var _Customer = require("./customer");
var _DeliveryAddress = require("./deliveryAddress");
var _Like = require("./like");
var _Option = require("./option");
var _OptionOrder = require("./optionOrder");
var _Product = require("./product");
var _ProductDescription = require("./productDescription");
var _ProductImage = require("./productImage");
var _ProductionAddress = require("./productionAddress");
var _Question = require("./question");
var _RefreshToken = require("./refreshToken");
var _Review = require("./review");
var _ReviewImage = require("./reviewImage");
var _Seller = require("./seller");
var _TotalOrder = require("./totalOrder");

function initModels(sequelize) {
  var Answer = _Answer(sequelize, DataTypes);
  var CartItem = _CartItem(sequelize, DataTypes);
  var Comment = _Comment(sequelize, DataTypes);
  var Customer = _Customer(sequelize, DataTypes);
  var DeliveryAddress = _DeliveryAddress(sequelize, DataTypes);
  var Like = _Like(sequelize, DataTypes);
  var Option = _Option(sequelize, DataTypes);
  var OptionOrder = _OptionOrder(sequelize, DataTypes);
  var Product = _Product(sequelize, DataTypes);
  var ProductDescription = _ProductDescription(sequelize, DataTypes);
  var ProductImage = _ProductImage(sequelize, DataTypes);
  var ProductionAddress = _ProductionAddress(sequelize, DataTypes);
  var Question = _Question(sequelize, DataTypes);
  var RefreshToken = _RefreshToken(sequelize, DataTypes);
  var Review = _Review(sequelize, DataTypes);
  var ReviewImage = _ReviewImage(sequelize, DataTypes);
  var Seller = _Seller(sequelize, DataTypes);
  var TotalOrder = _TotalOrder(sequelize, DataTypes);

  Customer.belongsToMany(DeliveryAddress, { as: 'DeliveryAddress_id_DeliveryAddresses', through: TotalOrder, foreignKey: "Customer_id", otherKey: "DeliveryAddress_id" });
  Customer.belongsToMany(Option, { as: 'Option_id_Options', through: CartItem, foreignKey: "Customer_id", otherKey: "Option_id" });
  Customer.belongsToMany(Product, { as: 'Product_id_Products', through: Like, foreignKey: "Customer_id", otherKey: "Product_id" });
  DeliveryAddress.belongsToMany(Customer, { as: 'Customer_id_Customer_TotalOrders', through: TotalOrder, foreignKey: "DeliveryAddress_id", otherKey: "Customer_id" });
  Option.belongsToMany(Customer, { as: 'Customer_id_Customers', through: CartItem, foreignKey: "Option_id", otherKey: "Customer_id" });
  Product.belongsToMany(Customer, { as: 'Customer_id_Customer_Likes', through: Like, foreignKey: "Product_id", otherKey: "Customer_id" });
  ProductionAddress.belongsToMany(Seller, { as: 'Seller_id_Sellers', through: Product, foreignKey: "ProductionAddress_id", otherKey: "Seller_id" });
  Seller.belongsToMany(ProductionAddress, { as: 'ProductionAddress_id_ProductionAddresses', through: Product, foreignKey: "Seller_id", otherKey: "ProductionAddress_id" });
  CartItem.belongsTo(Customer, { as: "Customer", foreignKey: "Customer_id"});
  Customer.hasMany(CartItem, { as: "CartItems", foreignKey: "Customer_id"});
  DeliveryAddress.belongsTo(Customer, { as: "Customer", foreignKey: "Customer_id"});
  Customer.hasMany(DeliveryAddress, { as: "DeliveryAddresses", foreignKey: "Customer_id"});
  Like.belongsTo(Customer, { as: "Customer", foreignKey: "Customer_id"});
  Customer.hasMany(Like, { as: "Likes", foreignKey: "Customer_id"});
  OptionOrder.belongsTo(Customer, { as: "Customer", foreignKey: "Customer_id"});
  Customer.hasMany(OptionOrder, { as: "OptionOrders", foreignKey: "Customer_id"});
  TotalOrder.belongsTo(Customer, { as: "Customer", foreignKey: "Customer_id"});
  Customer.hasMany(TotalOrder, { as: "TotalOrders", foreignKey: "Customer_id"});
  TotalOrder.belongsTo(DeliveryAddress, { as: "DeliveryAddress", foreignKey: "DeliveryAddress_id"});
  DeliveryAddress.hasMany(TotalOrder, { as: "TotalOrders", foreignKey: "DeliveryAddress_id"});
  CartItem.belongsTo(Option, { as: "Option", foreignKey: "Option_id"});
  Option.hasMany(CartItem, { as: "CartItems", foreignKey: "Option_id"});
  OptionOrder.belongsTo(Option, { as: "Option", foreignKey: "Option_id"});
  Option.hasMany(OptionOrder, { as: "OptionOrders", foreignKey: "Option_id"});
  Like.belongsTo(Product, { as: "Product", foreignKey: "Product_id"});
  Product.hasMany(Like, { as: "Likes", foreignKey: "Product_id"});
  Option.belongsTo(Product, { as: "Product", foreignKey: "Product_id"});
  Product.hasMany(Option, { as: "Options", foreignKey: "Product_id"});
  ProductImage.belongsTo(Product, { as: "Product", foreignKey: "Product_id"});
  Product.hasMany(ProductImage, { as: "ProductImages", foreignKey: "Product_id"});
  Question.belongsTo(Product, { as: "Product", foreignKey: "Product_id"});
  Product.hasMany(Question, { as: "Questions", foreignKey: "Product_id"});
  Review.belongsTo(Product, { as: "Product", foreignKey: "Product_id"});
  Product.hasMany(Review, { as: "Reviews", foreignKey: "Product_id"});
  Product.belongsTo(ProductionAddress, { as: "ProductionAddress", foreignKey: "ProductionAddress_id"});
  ProductionAddress.hasMany(Product, { as: "Products", foreignKey: "ProductionAddress_id"});
  Answer.belongsTo(Question, { as: "Question", foreignKey: "Question_id"});
  Question.hasMany(Answer, { as: "Answers", foreignKey: "Question_id"});
  Comment.belongsTo(Review, { as: "Review", foreignKey: "Review_id"});
  Review.hasMany(Comment, { as: "Comments", foreignKey: "Review_id"});
  ReviewImage.belongsTo(Review, { as: "Review", foreignKey: "Review_id"});
  Review.hasMany(ReviewImage, { as: "ReviewImages", foreignKey: "Review_id"});
  Product.belongsTo(Seller, { as: "Seller", foreignKey: "Seller_id"});
  Seller.hasMany(Product, { as: "Products", foreignKey: "Seller_id"});
  ProductionAddress.belongsTo(Seller, { as: "Seller", foreignKey: "Seller_id"});
  Seller.hasMany(ProductionAddress, { as: "ProductionAddresses", foreignKey: "Seller_id"});
  OptionOrder.belongsTo(TotalOrder, { as: "TotalOrder", foreignKey: "TotalOrder_id"});
  TotalOrder.hasMany(OptionOrder, { as: "OptionOrders", foreignKey: "TotalOrder_id"});

  return {
    Answer,
    CartItem,
    Comment,
    Customer,
    DeliveryAddress,
    Like,
    Option,
    OptionOrder,
    Product,
    ProductDescription,
    ProductImage,
    ProductionAddress,
    Question,
    RefreshToken,
    Review,
    ReviewImage,
    Seller,
    TotalOrder,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
