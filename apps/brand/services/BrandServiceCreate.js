const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { BRAND_CONFIG_MAIN_TABLE } = require("../Config");

const BrandServiceCreate = async (
    brandID,
    brandName,
    createdBy

) => {
    const data = {
        brandID,
        brandName,
        createdBy
    };

    await BaseServiceQueryBuilder(BRAND_CONFIG_MAIN_TABLE).insert(data);

    return data;
};

module.exports = BrandServiceCreate;
