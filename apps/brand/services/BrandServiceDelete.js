const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { BRAND_CONFIG_MAIN_TABLE } = require("../Config");

const BrandServiceDelete = async (brandID) => {
    try {
        await BaseServiceQueryBuilder(BRAND_CONFIG_MAIN_TABLE)
            .where({ brandID })
            .del();
    } catch (error) {
        console.log(error);
    } finally {
        return null;
    }
};

module.exports = BrandServiceDelete;
