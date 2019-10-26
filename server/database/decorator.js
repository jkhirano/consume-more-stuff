const Image = require("./models/Image");
const User = require("./models/User");
const ItemCategory = require("./models/ItemCategory");
const Item = require("./models/Item");
const ItemCondition = require("./models/ItemCondition");
const ItemStatus = require("./models/ItemStatus");
const UserStatus = require("./models/UserStatus");

module.exports = function(req, res, next) {
  req.database = {
    User: User,
    Image: Image,
    Item: Item,
    ItemCategory: ItemCategory,
    ItemCondition: ItemCondition,
    ItemStatus: ItemStatus,
    UserStatus: UserStatus
  };
  next();
};
