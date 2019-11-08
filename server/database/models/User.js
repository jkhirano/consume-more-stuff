const bookshelf = require("../bookshelf");

class User extends bookshelf.Model {
  get tableName() {
    return "users";
  }
  get hasTimestamps() {
    return true;
  }
  items() {
    return this.belongsToMany("Item");
  }

  userStatus() {
    return this.hasOne("UserStatus");
  }
}

module.exports = bookshelf.model("User", User);
