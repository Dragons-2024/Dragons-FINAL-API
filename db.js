const featuredproducts = require("./data/FeaturedProducts");
const activities=require("./data/Activities")

module.exports = () => {
    return {
        featuredproducts,
        activities,
    }

}