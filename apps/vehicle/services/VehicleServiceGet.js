const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { VEHICLE_CONFIG_MAIN_TABLE } = require("../config");

const VehicleServiceGet = async (vehicleID) => {
  const vehicle = await BaseServiceQueryBuilder(VEHICLE_CONFIG_MAIN_TABLE)
    .where({ vehicleID })
    .first();

  return vehicle;
};

module.exports = VehicleServiceGet;
