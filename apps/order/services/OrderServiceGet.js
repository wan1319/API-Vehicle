const { ORDER_CONFIG_MAIN_TABLE } = require("../config");
const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");

const OrderServiceGet = async (orderID) => {
  try {
    const order = await BaseServiceQueryBuilder(ORDER_CONFIG_MAIN_TABLE)
      .where({ orderID })
      .first();

    return order;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch the order.");
  }
};

module.exports = OrderServiceGet;
