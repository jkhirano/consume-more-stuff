const bookshelf = require("../bookshelf");

class Item extends bookshelf.Model {
  get tableName() {
    return "items";
  }
  get hasTimestamps() {
    return true;
  }
  user() {
    return this.belongsTo("User");
  }
  images() {
    return this.hasMany("Image");
  }
}

module.exports = bookshelf.model("Item", Item);
