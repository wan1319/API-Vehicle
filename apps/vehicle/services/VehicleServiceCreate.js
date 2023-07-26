const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { VEHICLE_CONFIG_MAIN_TABLE } = require("../config");

const VehicleServiceCreate = async (
    vehicleName,
    brandID,
    price,
    year,
    createdBy
) => {
    const data = {
        vehicleName,
        brandID,
        price,
        year,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        createdBy
    };

    await BaseServiceQueryBuilder(VEHICLE_CONFIG_MAIN_TABLE).insert(data);

    return data;
};

module.exports = VehicleServiceCreate;
