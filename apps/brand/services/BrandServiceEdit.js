const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { BRAND_CONFIG_MAIN_TABLE } = require("../Config");

const BrandServiceEdit = async (
    brandID,
    brandName,
    createdBy

) => {
    const data = {
        brandID,
        brandName,
        createdBy,
    };

  await BaseServiceQueryBuilder(BRAND_CONFIG_MAIN_TABLE)
    .where({ brandID })
    .update(data);

  return { brandID, ...data };
};

module.exports = BrandServiceEdit;
