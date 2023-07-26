const express = require("express");
const OrderServiceCreate = require("./path/to/OrderServiceCreate");
const OrderValidators = require("./path/to/OrderValidators");
const ConfigCTA = require("../base/services/ConfigCTA");

const OrderControllers = express.Router();

OrderControllers.post(
  "/",
  [
    OrderValidators.userID(),
    OrderValidators.vehicleID(),
  ],
  async (req, res) => {
    try {
      const { userID, vehicleID } = req.body;

      const order = await OrderServiceCreate(userID, vehicleID);

      return res.status(201).json(order);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: ConfigCTA.CTA_MESSAGE_CREATE_ERROR });
    }
  }
);

module.exports = OrderControllers;
