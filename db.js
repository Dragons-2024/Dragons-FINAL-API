// db.js
const activities = require("./data/Activities");
const opportunities = require("./data/Opportunities");
const clientes = require("./data/Client");

console.log("Clientes:", clientes);  // Agregar un log aquí para verificar los datos

module.exports = () => {
  return {
    activities,
    opportunities,
    clientes,
  };
};
