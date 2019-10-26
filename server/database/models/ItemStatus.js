const bookshelf = require("../bookshelf");

class ItemStatus extends bookshelf.Model {
  get tableName() {
    return "itemStatuses";
  }
  get hasTimestamps() {
    return true;
  }
  items() {
    return this.belongsToMany("Item");
  }
}

module.exports = bookshelf.model("ItemStatus", ItemStatus);
