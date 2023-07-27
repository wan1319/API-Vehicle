const BaseServicePaginator = require("../../base/services/BaseServicePaginator");
const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { ORDER_CONFIG_MAIN_TABLE } = require("../Config");

const BrandServiceList = async (terms, page) => {
    const queryBuilder = BaseServiceQueryBuilder(ORDER_CONFIG_MAIN_TABLE);

    if (terms) {
        queryBuilder
            .whereILike("userID", `%${terms}%`)
            .orWhereILike("vehicleID", `%${terms}%`);
    }
    
    return {
        ...(await BaseServicePaginator(page, queryBuilder)),
        terms: terms ? terms : "",
    };
};

module.exports = BrandServiceList;
