const bookshelf = require("../bookshelf");

class Item extends bookshelf.Model {
  get tableName() {
    return "items";
  }
  get hasTimestamps() {
    return true;
  }
  user() {
    return this.hasOne("User");
  }
  images() {
    return this.belongsToMany("Image");
  }
  category() {
    return this.hasOne("ItemCategory");
  }
  condition() {
    return this.hasOne("ItemCondition");
  }

  status() {
    return this.hasOne("ItemStatus");
  }
}

module.exports = bookshelf.model("Item", Item);
