const bookshelf = require("../bookshelf");

class ItemStatus extends bookshelf.Model {
  get tableName() {
    return "item_statuses";
  }
  get hasTimestamps() {
    return true;
  }
  items() {
    return this.belongsToMany("Item");
  }
}

module.exports = bookshelf.model("ItemStatus", ItemStatus);
