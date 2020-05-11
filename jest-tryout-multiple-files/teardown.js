// teardown.js
module.exports = async function () {
  //await global.__MONGOD__.stop();
  await console.log("GLOBAL TEARDOWN "+ global.counter)
};
