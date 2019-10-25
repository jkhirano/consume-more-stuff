const bookshelf = require("../bookshelf");

class ItemCondition extends bookshelf.Model {
  get tableName() {
    return "conditions";
  }
  get hasTimestamps() {
    return true;
  }
  items() {
    return this.belongsToMany("Item");
  }
}

module.exports = bookshelf.model("ItemCondition", ItemCondition);
