const activities=require("./data/Activities")
const opportunities=require("./data/Opportunities")
const clientes = require("./data/Client")

module.exports = () => {
    return {
        activities,
        opportunities,
        clientes,
    }

}