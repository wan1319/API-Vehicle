const { body, param } = require("express-validator");
const express = require("express");
const BaseValidatorRun = require("../base/validators/BaseValidatorRun");
const UserServiceTokenAuthentication = require("../user/services/UserServiceTokenAuthentication");
const VehicleServiceCreate = require("./services/VehicleServiceCreate");
const VehicleServiceGet = require("./services/VehicleServiceGet");
const VehicleServiceEdit = require("./services/VehicleServiceEdit");
const VehicleServiceDelete = require("./services/VehicleServiceDelete");
const VehicleServiceList = require("./services/VehicleServiceList");
const VehicleValidators = require("./VehicleValidators");
const ConfigCTA = require("../base/services/ConfigCTA");

const VehicleControllers = express.Router();


VehicleControllers.post(
  "/",
  [
    UserServiceTokenAuthentication,
    VehicleValidators.vehicleName(),
    VehicleValidators.brandID(),
    VehicleValidators.price(),
    VehicleValidators.year(),
  ],
  async (req, res) => {
    try {
      const vehicle = await VehicleServiceCreate(
        req.body.vehicleName,
        req.body.brandID,
        req.body.price,
        req.body.year,
        req.user.email
      );
      return res.status(201).json(vehicle);
    } catch (error) {
      return res.status(500).json({ error: ConfigCTA.CTA_MESSAGE_REQUEST_ERROR });
    }
  }
);


VehicleControllers.get(
  "/:vehicleID",
  [
    UserServiceTokenAuthentication,
    VehicleValidators.vehicleID(param, false),
    BaseValidatorRun(),
  ],
  async (req, res) => {
    try {
      const vehicle = await VehicleServiceGet(req.params.vehicleID);
      if (!vehicle) {
        return res.status(404).json({ error: ConfigCTA.CTA_MESSAGE_REQUEST_ERROR });
      }
      return res.status(200).json(vehicle);
    } catch (error) {
      return res.status(500).json({ error: ConfigCTA.CTA_MESSAGE_REQUEST_ERROR });
    }
  }
);


VehicleControllers.put(
  "/:vehicleID",
  [
    UserServiceTokenAuthentication,
    VehicleValidators.vehicleID(param, false),
    VehicleValidators.vehicleName(),
    VehicleValidators.brandID(),
    VehicleValidators.price(),
    VehicleValidators.year(),
    BaseValidatorRun(),
  ],
  async (req, res) => {
    try {
      const vehicle = await VehicleServiceEdit(
        req.params.vehicleID,
        req.body.vehicleName,
        req.body.brandID,
        req.body.price,
        req.body.year,
        req.user.email
      );
      if (!vehicle) {
        return res.status(404).json({ error: ConfigCTA.CTA_MESSAGE_REQUEST_ERROR });
      }
      return res.status(200).json(vehicle);
    } catch (error) {
      return res.status(500).json({ error: ConfigCTA.CTA_MESSAGE_ERROR_UPDATE });
    }
  }
);


VehicleControllers.delete(
  "/:vehicleID",
  [
    UserServiceTokenAuthentication,
    VehicleValidators.vehicleID(param, false),
    BaseValidatorRun(),
  ],
  async (req, res) => {
    try {
      const vehicle = await VehicleServiceDelete(req.params.vehicleID);
      if (!vehicle) {
        return res.status(404).json({ error: ConfigCTA.CTA_MESSAGE_REQUEST_ERROR });
      }
      return res.status(204).json({error: ConfigCTA.CTA_MESSAGE_SUCCESS_DELETE});
    } catch (error) {
      return res.status(500).json({ error: ConfigCTA.CTA_MESSAGE_ERROR_DELETE });
    }
  }
);


VehicleControllers.get(
  "/",
  [
    UserServiceTokenAuthentication,
    VehicleValidators.terms(),
    VehicleValidators.page(),
    BaseValidatorRun(),
  ],
  async (req, res) => {
    try {
      const vehicles = await VehicleServiceList(req.query.terms, req.query.page);
      return res.status(200).json(vehicles);
    } catch (error) {
      return res.status(500).json({ error: ConfigCTA.CTA_MESSAGE_REQUEST_ERROR });
    }
  }
);

module.exports = VehicleControllers;
