const dbConfig = require('../config/db.config.js');
const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

const connex = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: 3306,
  operatorAliases: false,
});

const db = {};

db.connex = connex;

fs.readdirSync(__dirname)
  .filter((file) => file !== 'index.js')
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(connex, Sequelize);
    if (model !== undefined && model.name !== undefined) {
    db[model.name] = model;
    }
  });

connex.sync()
  .then(() => {
    Object.values(db).forEach((model) => {
      if (typeof model.associate === 'function') {
        model.associate(db);
      }
    });
  });

module.exports = db;
