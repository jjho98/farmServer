'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "Answer", deps: []
 * createTable "CartItem", deps: []
 * createTable "Comment", deps: []
 * createTable "Customer", deps: []
 * createTable "DeliveryAddress", deps: []
 * createTable "Like", deps: []
 * createTable "Option", deps: []
 * createTable "OptionOrder", deps: []
 * createTable "Product", deps: []
 * createTable "ProductDescription", deps: []
 * createTable "ProductImage", deps: []
 * createTable "ProductionAddress", deps: []
 * createTable "Question", deps: []
 * createTable "RefreshToken", deps: []
 * createTable "Review", deps: []
 * createTable "ReviewImage", deps: []
 * createTable "Seller", deps: []
 * createTable "TotalOrder", deps: []
 * addIndex "PRIMARY" to table "Answer"
 * addIndex "fk_Answer_Question1" to table "Answer"
 * addIndex "PRIMARY" to table "CartItem"
 * addIndex "fk_Customer_has_Option_Customer1" to table "CartItem"
 * addIndex "fk_Customer_has_Option_Option1" to table "CartItem"
 * addIndex "PRIMARY" to table "Comment"
 * addIndex "fk_Comment_Review1" to table "Comment"
 * addIndex "PRIMARY" to table "Customer"
 * addIndex "email_UNIQUE" to table "Customer"
 * addIndex "nickname_UNIQUE" to table "Customer"
 * addIndex "PRIMARY" to table "DeliveryAddress"
 * addIndex "fk_DeliveryAddress_Customer1" to table "DeliveryAddress"
 * addIndex "PRIMARY" to table "Like"
 * addIndex "fk_Product_has_Customer_Customer1" to table "Like"
 * addIndex "PRIMARY" to table "Option"
 * addIndex "fk_ProductOption_Product1" to table "Option"
 * addIndex "PRIMARY" to table "OptionOrder"
 * addIndex "fk_Customer_has_Option_Customer2" to table "OptionOrder"
 * addIndex "fk_Customer_has_Option_Option2" to table "OptionOrder"
 * addIndex "fk_OptionOrder_TotalOrder1" to table "OptionOrder"
 * addIndex "PRIMARY" to table "Product"
 * addIndex "fk_Product_ProductionAddress1" to table "Product"
 * addIndex "fk_Product_Seller1" to table "Product"
 * addIndex "PRIMARY" to table "ProductDescription"
 * addIndex "PRIMARY" to table "ProductImage"
 * addIndex "fk_ProductImage_Product1" to table "ProductImage"
 * addIndex "PRIMARY" to table "ProductionAddress"
 * addIndex "fk_ProductionAddress_Seller1" to table "ProductionAddress"
 * addIndex "PRIMARY" to table "Question"
 * addIndex "fk_Question_Product1" to table "Question"
 * addIndex "PRIMARY" to table "RefreshToken"
 * addIndex "PRIMARY" to table "Review"
 * addIndex "fk_Review_Product1" to table "Review"
 * addIndex "PRIMARY" to table "ReviewImage"
 * addIndex "fk_ReviewImage_Review1" to table "ReviewImage"
 * addIndex "PRIMARY" to table "Seller"
 * addIndex "PRIMARY" to table "TotalOrder"
 * addIndex "fk_TotalOrder_Customer1" to table "TotalOrder"
 * addIndex "fk_TotalOrder_DeliveryAddress1" to table "TotalOrder"
 *
 **/

var info = {
    "revision": 1,
    "name": "migration",
    "created": "2021-09-04T13:00:25.228Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "Answer",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "CartItem",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Comment",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Customer",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "DeliveryAddress",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Like",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Option",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "OptionOrder",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Product",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "ProductDescription",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "ProductImage",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "ProductionAddress",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Question",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "RefreshToken",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Review",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "ReviewImage",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "Seller",
            {

            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "TotalOrder",
            {

            },
            {}
        ]
    },
    {
        fn: "addIndex",
        params: [
            "Answer",
            [{
                "name": "id"
            }, {
                "name": "Question_id"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "Answer",
            [{
                "name": "Question_id"
            }],
            {
                "indexName": "fk_Answer_Question1"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "CartItem",
            [{
                "name": "id"
            }, {
                "name": "Customer_id"
            }, {
                "name": "Option_id"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "CartItem",
            [{
                "name": "Customer_id"
            }],
            {
                "indexName": "fk_Customer_has_Option_Customer1"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "CartItem",
            [{
                "name": "Option_id"
            }],
            {
                "indexName": "fk_Customer_has_Option_Option1"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "Comment",
            [{
                "name": "id"
            }, {
                "name": "Review_id"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "Comment",
            [{
                "name": "Review_id"
            }],
            {
                "indexName": "fk_Comment_Review1"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "Customer",
            [{
                "name": "id"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "Customer",
            [{
                "name": "email"
            }],
            {
                "indexName": "email_UNIQUE",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "Customer",
            [{
                "name": "nickname"
            }],
            {
                "indexName": "nickname_UNIQUE",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "DeliveryAddress",
            [{
                "name": "id"
            }, {
                "name": "Customer_id"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "DeliveryAddress",
            [{
                "name": "Customer_id"
            }],
            {
                "indexName": "fk_DeliveryAddress_Customer1"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "Like",
            [{
                "name": "Product_id"
            }, {
                "name": "Customer_id"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "Like",
            [{
                "name": "Customer_id"
            }],
            {
                "indexName": "fk_Product_has_Customer_Customer1"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "Option",
            [{
                "name": "id"
            }, {
                "name": "Product_id"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "Option",
            [{
                "name": "Product_id"
            }],
            {
                "indexName": "fk_ProductOption_Product1"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "OptionOrder",
            [{
                "name": "id"
            }, {
                "name": "Customer_id"
            }, {
                "name": "Option_id"
            }, {
                "name": "TotalOrder_id"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "OptionOrder",
            [{
                "name": "Customer_id"
            }],
            {
                "indexName": "fk_Customer_has_Option_Customer2"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "OptionOrder",
            [{
                "name": "Option_id"
            }],
            {
                "indexName": "fk_Customer_has_Option_Option2"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "OptionOrder",
            [{
                "name": "TotalOrder_id"
            }],
            {
                "indexName": "fk_OptionOrder_TotalOrder1"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "Product",
            [{
                "name": "id"
            }, {
                "name": "Seller_id"
            }, {
                "name": "ProductionAddress_id"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "Product",
            [{
                "name": "ProductionAddress_id"
            }],
            {
                "indexName": "fk_Product_ProductionAddress1"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "Product",
            [{
                "name": "Seller_id"
            }],
            {
                "indexName": "fk_Product_Seller1"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "ProductDescription",
            [{
                "name": "id"
            }, {
                "name": "Product_id"
            }, {
                "name": "Product_Seller_id"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "ProductImage",
            [{
                "name": "id"
            }, {
                "name": "Product_id"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "ProductImage",
            [{
                "name": "Product_id"
            }],
            {
                "indexName": "fk_ProductImage_Product1"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "ProductionAddress",
            [{
                "name": "id"
            }, {
                "name": "Seller_id"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "ProductionAddress",
            [{
                "name": "Seller_id"
            }],
            {
                "indexName": "fk_ProductionAddress_Seller1"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "Question",
            [{
                "name": "id"
            }, {
                "name": "Product_id"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "Question",
            [{
                "name": "Product_id"
            }],
            {
                "indexName": "fk_Question_Product1"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "RefreshToken",
            [{
                "name": "token"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "Review",
            [{
                "name": "id"
            }, {
                "name": "Product_id"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "Review",
            [{
                "name": "Product_id"
            }],
            {
                "indexName": "fk_Review_Product1"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "ReviewImage",
            [{
                "name": "id"
            }, {
                "name": "Review_id"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "ReviewImage",
            [{
                "name": "Review_id"
            }],
            {
                "indexName": "fk_ReviewImage_Review1"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "Seller",
            [{
                "name": "id"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "TotalOrder",
            [{
                "name": "id"
            }, {
                "name": "Customer_id"
            }, {
                "name": "DeliveryAddress_id"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "TotalOrder",
            [{
                "name": "Customer_id"
            }],
            {
                "indexName": "fk_TotalOrder_Customer1"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "TotalOrder",
            [{
                "name": "DeliveryAddress_id"
            }],
            {
                "indexName": "fk_TotalOrder_DeliveryAddress1"
            }
        ]
    }
];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
