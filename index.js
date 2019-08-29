import { transaction, Model } from "objection";
import cls from "cls-hooked";
const session = cls.createNamespace("session");

module.exports = fn => {
  return async function() {
    const transactionManager = await transaction.start(Model.knex());
    const args = [...arguments];
    const res = await session.runAndReturn(async () => {
      let err;
      session.set("tx", transactionManager);
      try {
        const fn1 = await fn(args[0]).catch(err => {
          throw err;
        });
        await transactionManager.commit();
        return fn1;
      } catch (error) {
        err = error;
        await transactionManager.rollback();
        throw err;
      }
    });
    return res;
  };
};
