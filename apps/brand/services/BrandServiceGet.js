const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { BRAND_CONFIG_MAIN_TABLE } = require("../Config");

const BrandServiceGet = async (brandID) => {
    const brand = await BaseServiceQueryBuilder(BRAND_CONFIG_MAIN_TABLE)
        .where({ brandID })
        .first();

    if (!brand) {
        return null;
    }

    return brand;
};

module.exports = BrandServiceGet;
