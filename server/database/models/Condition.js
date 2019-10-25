const bookshelf = require("../bookshelf");

class Condition extends bookshelf.Model {
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

module.exports = bookshelf.model("Condition", Condition);
