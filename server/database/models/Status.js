const bookshelf = require("../bookshelf");

class Status extends bookshelf.Model {
  get tableName() {
    return "statuses";
  }
  get hasTimestamps() {
    return true;
  }
  items() {
    return this.belongsToMany("Item");
  }
}

module.exports = bookshelf.model("Status", Status);
