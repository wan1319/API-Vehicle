const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { BRAND_CONFIG_MAIN_TABLE } = require("../Config");

const BrandServiceCreate = async (
    brandID,
    brandName,
    createdBy,
) => {
    const currentDate = new Date().toISOString();

    const data = {
        brandID,
        brandName,
        createdAt: currentDate,
        createdBy,
        updatedAt: currentDate,
        updatedBy: createdBy,
    };

    await BaseServiceQueryBuilder(BRAND_CONFIG_MAIN_TABLE).insert(data);

    return data;
};

module.exports = BrandServiceCreate;
