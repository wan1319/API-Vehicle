const { body } = require("express-validator");
const UserServiceGet = require("../user/services/UserServiceGet");
const VehicleServiceGet = require("../vehicle/services/VehicleServiceGet");

const OrderValidators = {
  userID: () => {
    return body("userID")
      .notEmpty()
      .withMessage("userID is required.")
      .bail()
      .custom(async (value) => {
        const user = await UserServiceGet(value);
        if (!user) {
          return Promise.reject("User with the provided userID does not exist.");
        }
      });
  },
  vehicleID: () => {
    return body("vehicleID")
      .notEmpty()
      .withMessage("vehicleID is required.")
      .bail()
      .custom(async (value) => {
        const vehicle = await VehicleServiceGet(value);
        if (!vehicle) {
          return Promise.reject("Vehicle with the provided vehicleID does not exist.");
        }
      });
  },
};

module.exports = OrderValidators;