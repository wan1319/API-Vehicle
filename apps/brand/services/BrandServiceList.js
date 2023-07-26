const BaseServicePaginator = require("../../base/services/BaseServicePaginator");
const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { BRAND_CONFIG_MAIN_TABLE } = require("../Config");

const BrandServiceList = async (terms, page) => {
    const queryBuilder = BaseServiceQueryBuilder(BRAND_CONFIG_MAIN_TABLE);

    if (terms) {
        queryBuilder
            .whereILike("brandID", `%${terms}%`)
            .orWhereILike("nrandName", `%${terms}%`);
    }

    return {
        ...(await BaseServicePaginator(page, queryBuilder)),
        terms: terms ? terms : "",
    };
};

module.exports = BrandServiceList;
