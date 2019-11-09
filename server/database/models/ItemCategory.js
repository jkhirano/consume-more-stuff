const bookshelf = require("../bookshelf");

class ItemCategory extends bookshelf.Model {
  get tableName() {
    return "item_categories";
  }
  get hasTimestamps() {
    return true;
  }
  items() {
    return this.belongsToMany("Item");
  }
}

module.exports = bookshelf.model("ItemCategory", ItemCategory);
