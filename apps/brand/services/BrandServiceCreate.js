const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { BRAND_CONFIG_MAIN_TABLE } = require("../Config");

const BrandServiceCreate = async (
    brandID,
    brandName,
    createdBy,
    updatedBy,
) => {
    const createdAt = new Date().toISOString();

    const data = {
        brandID,
        brandName,
        createdAt,
        createdBy,
        updatedAt,
        updatedBy: createdBy
    };

    await BaseServiceQueryBuilder(BRAND_CONFIG_MAIN_TABLE).insert(data);

    return data;
};

module.exports = BrandServiceCreate;
