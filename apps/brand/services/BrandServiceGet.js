const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const _ = require("lodash");
const { BRAND_CONFIG_MAIN_TABLE } = require("../Config");

const BrandServiceGet = async (field, value, many = false) => {
  const results = await BaseServiceQueryBuilder(BRAND_CONFIG_MAIN_TABLE).where(
    { [field]: value }
  );

  if (many) return results;

  return results[0];
};

module.exports = BrandServiceGet;
