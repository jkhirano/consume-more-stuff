const bookshelf = require("../bookshelf");

class Image extends bookshelf.Model {
  get tableName() {
    return "images";
  }
  get hasTimestamps() {
    return true;
  }
  item() {
    return this.belongsTo("Item");
  }
}

module.exports = bookshelf.model("Image", Image);
