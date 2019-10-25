const bookshelf = require("../bookshelf");

class Image extends bookshelf.Model {
  get tableName() {
    return "images";
  }
  get hasTimestamps() {
    return true;
  }
  items() {
    return this.hasOne("Item");
  }
}

module.exports = bookshelf.model("Image", Image);
