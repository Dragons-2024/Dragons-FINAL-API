const featuredproducts = require("./data/featuredproducts");
const activities=require("./data/Activities")

module.exports = () => {
    return {
        featuredproducts,
        activities,
    }

}