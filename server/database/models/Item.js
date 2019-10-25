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
    return this.hasOne("category");
  }
  condition() {
    return this.hasOne("condition");
  }

  status() {
    return this.hasOne("status");
  }
}

module.exports = bookshelf.model("Item", Item);
