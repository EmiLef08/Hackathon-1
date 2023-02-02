const AbstractManager = require("./AbstractManager");

class VilleManager extends AbstractManager {
  constructor() {
    super({ table: "villes" });
  }
}

module.exports = VilleManager;
