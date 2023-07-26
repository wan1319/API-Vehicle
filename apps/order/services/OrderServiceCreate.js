const { ORDER_CONFIG_MAIN_TABLE } = require("../config");
const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");

const OrderServiceCreate = async (userID, vehicleID) => {
  try {
    const createdAt = new Date().toISOString();

    const data = {
      userID,
      vehicleID,
      createdAt,
    };

    await BaseServiceQueryBuilder(ORDER_CONFIG_MAIN_TABLE).insert(data);

    return data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create the order.");
  }
};

module.exports = OrderServiceCreate;
