var DataTypes = require("sequelize").DataTypes;
var _Answer = require("./Answer");
var _CartItem = require("./CartItem");
var _Comment = require("./Comment");
var _Customer = require("./Customer");
var _DeliveryAddress = require("./DeliveryAddress");
var _Like = require("./Like");
var _Option = require("./Option");
var _OptionOrder = require("./OptionOrder");
var _Product = require("./Product");
var _ProductDescription = require("./ProductDescription");
var _ProductImage = require("./ProductImage");
var _ProductionAddress = require("./ProductionAddress");
var _Question = require("./Question");
var _RefreshToken = require("./RefreshToken");
var _Review = require("./Review");
var _ReviewImage = require("./ReviewImage");
var _Seller = require("./Seller");
var _TotalOrder = require("./TotalOrder");
var _User = require("./User");

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
  var User = _User(sequelize, DataTypes);

  Customer.belongsToMany(DeliveryAddress, { as: 'DeliveryAddress_id_DeliveryAddresses', through: TotalOrder, foreignKey: "Customer_id", otherKey: "DeliveryAddress_id" });
  Customer.belongsToMany(Product, { as: 'Product_id_Products', through: Like, foreignKey: "Customer_id", otherKey: "Product_id" });
  DeliveryAddress.belongsToMany(Customer, { as: 'Customer_id_Customer_TotalOrders', through: TotalOrder, foreignKey: "DeliveryAddress_id", otherKey: "Customer_id" });
  Product.belongsToMany(Customer, { as: 'Customer_id_Customers', through: Like, foreignKey: "Product_id", otherKey: "Customer_id" });
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
  CartItem.belongsTo(Option, { as: "Option_Product", foreignKey: "Option_Product_id"});
  Option.hasMany(CartItem, { as: "Option_Product_CartItems", foreignKey: "Option_Product_id"});
  OptionOrder.belongsTo(Option, { as: "Option", foreignKey: "Option_id"});
  Option.hasMany(OptionOrder, { as: "OptionOrders", foreignKey: "Option_id"});
  OptionOrder.belongsTo(Option, { as: "Option_Product", foreignKey: "Option_Product_id"});
  Option.hasMany(OptionOrder, { as: "Option_Product_OptionOrders", foreignKey: "Option_Product_id"});
  Like.belongsTo(Product, { as: "Product", foreignKey: "Product_id"});
  Product.hasMany(Like, { as: "Likes", foreignKey: "Product_id"});
  Option.belongsTo(Product, { as: "Product", foreignKey: "Product_id"});
  Product.hasMany(Option, { as: "Options", foreignKey: "Product_id"});
  ProductDescription.belongsTo(Product, { as: "Product", foreignKey: "Product_id"});
  Product.hasMany(ProductDescription, { as: "ProductDescriptions", foreignKey: "Product_id"});
  ProductImage.belongsTo(Product, { as: "Product", foreignKey: "Product_id"});
  Product.hasMany(ProductImage, { as: "ProductImages", foreignKey: "Product_id"});
  Question.belongsTo(Product, { as: "Product", foreignKey: "Product_id"});
  Product.hasMany(Question, { as: "Questions", foreignKey: "Product_id"});
  Question.belongsTo(Product, { as: "Product_ProductionAddress", foreignKey: "Product_ProductionAddress_id"});
  Product.hasMany(Question, { as: "Product_ProductionAddress_Questions", foreignKey: "Product_ProductionAddress_id"});
  Question.belongsTo(Product, { as: "Product_Seller", foreignKey: "Product_Seller_id"});
  Product.hasMany(Question, { as: "Product_Seller_Questions", foreignKey: "Product_Seller_id"});
  Review.belongsTo(Product, { as: "Product", foreignKey: "Product_id"});
  Product.hasMany(Review, { as: "Reviews", foreignKey: "Product_id"});
  Product.belongsTo(ProductionAddress, { as: "ProductionAddress", foreignKey: "ProductionAddress_id"});
  ProductionAddress.hasMany(Product, { as: "Products", foreignKey: "ProductionAddress_id"});
  Answer.belongsTo(Question, { as: "Question", foreignKey: "Question_id"});
  Question.hasMany(Answer, { as: "Answers", foreignKey: "Question_id"});
  Answer.belongsTo(Question, { as: "Question_Product", foreignKey: "Question_Product_id"});
  Question.hasMany(Answer, { as: "Question_Product_Answers", foreignKey: "Question_Product_id"});
  Answer.belongsTo(Question, { as: "Question_Product_ProductionAddress", foreignKey: "Question_Product_ProductionAddress_id"});
  Question.hasMany(Answer, { as: "Question_Product_ProductionAddress_Answers", foreignKey: "Question_Product_ProductionAddress_id"});
  Answer.belongsTo(Question, { as: "Question_Product_Seller", foreignKey: "Question_Product_Seller_id"});
  Question.hasMany(Answer, { as: "Question_Product_Seller_Answers", foreignKey: "Question_Product_Seller_id"});
  Comment.belongsTo(Review, { as: "Review", foreignKey: "Review_id"});
  Review.hasMany(Comment, { as: "Comments", foreignKey: "Review_id"});
  Comment.belongsTo(Review, { as: "Review_Product", foreignKey: "Review_Product_id"});
  Review.hasMany(Comment, { as: "Review_Product_Comments", foreignKey: "Review_Product_id"});
  Comment.belongsTo(Review, { as: "Review_Product_Seller", foreignKey: "Review_Product_Seller_id"});
  Review.hasMany(Comment, { as: "Review_Product_Seller_Comments", foreignKey: "Review_Product_Seller_id"});
  ReviewImage.belongsTo(Review, { as: "Review", foreignKey: "Review_id"});
  Review.hasMany(ReviewImage, { as: "ReviewImages", foreignKey: "Review_id"});
  Product.belongsTo(Seller, { as: "Seller", foreignKey: "Seller_id"});
  Seller.hasMany(Product, { as: "Products", foreignKey: "Seller_id"});
  OptionOrder.belongsTo(TotalOrder, { as: "TotalOrder", foreignKey: "TotalOrder_id"});
  TotalOrder.hasMany(OptionOrder, { as: "OptionOrders", foreignKey: "TotalOrder_id"});
  OptionOrder.belongsTo(TotalOrder, { as: "TotalOrder_Customer", foreignKey: "TotalOrder_Customer_id"});
  TotalOrder.hasMany(OptionOrder, { as: "TotalOrder_Customer_OptionOrders", foreignKey: "TotalOrder_Customer_id"});

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
    User,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
