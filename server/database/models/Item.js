const bookshelf = require("../bookshelf");

class Item extends bookshelf.Model {
  get tableName() {
    return "items";
  }
  get hasTimestamps() {
    return true;
  }
  user() {
    return this.hasOne("User", "id", "user_id");
  }
  images() {
    return this.hasMany("Image");
  }

  category() {
    return this.hasOne("ItemCategory", "id", "category_id");
  }
  condition() {
    return this.hasOne("ItemCondition", "id", "condition_id");
  }

  status() {
    return this.hasOne("ItemStatus", "id", "item_status_id");
  }
}

module.exports = bookshelf.model("Item", Item);
