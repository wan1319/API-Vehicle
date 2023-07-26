const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { VEHICLE_CONFIG_MAIN_TABLE } = require("../config");

const VehicleServiceEdit = async (
    vehicleID,
    vehicleName,
    brandID,
    price,
    year,
    updatedBy
) => {
    const data = {
        vehicleName,
        brandID,
        price,
        year,
        updatedAt: new Date().toISOString(), // Set updatedAt to the current timestamp
        updatedBy
    };

    await BaseServiceQueryBuilder(VEHICLE_CONFIG_MAIN_TABLE)
        .where({ vehicleID })
        .update(data);

    return data;
};

module.exports = VehicleServiceEdit;
