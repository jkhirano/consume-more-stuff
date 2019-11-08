const bookshelf = require("../bookshelf");

class UserStatus extends bookshelf.Model {
  get tableName() {
    return "user_statuses";
  }
  get hasTimestamps() {
    return true;
  }
  users() {
    return this.belongsToMany("User");
  }
}

module.exports = bookshelf.model("UserStatus", UserStatus);
