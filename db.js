// db.js
const activities = require("./data/Activities");
const opportunities = require("./data/Opportunities");
const clientes = require("./data/Client.json");

module.exports = () => {
  return {
    activities,
    opportunities,
    clientes,
  };
};
