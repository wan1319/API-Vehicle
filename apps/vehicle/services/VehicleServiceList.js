const BaseServicePaginator = require("../../base/services/BaseServicePaginator");
const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { VEHICLE_CONFIG_MAIN_TABLE } = require("../config");

const VehicleServiceList = async (terms, page) => {
    const queryBuilder = BaseServiceQueryBuilder(VEHICLE_CONFIG_MAIN_TABLE);

    if (terms) {
        queryBuilder
            .whereILike("vehicleID", `%${terms}%`)
            .orWhereILike("vehicleName", `%${terms}%`)
            .orWhereILike("brandID", `%${terms}%`)
            .orWhereILike("price", `%${terms}%`)
            .orWhereILike("year", `%${terms}%`);
    }

    return {
        ...(await BaseServicePaginator(page, queryBuilder)),
        terms: terms ? terms : "",
    };
};

module.exports = VehicleServiceList;
