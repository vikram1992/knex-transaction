const { Model } = require("objection");
const cls = require("cls-hooked");

module.export = class BaseModel extends Model {
  static query(...args) {
    const query = super
      .query(...args)
      .transacting(cls.getNamespace("session").get("tx"));
    return query;
  }
};
