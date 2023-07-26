const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

app.use("/user", require("./apps/user/UserControllers"));
app.use("/brand", require("./apps/brand/BrandControllers"));
app.use("/order", require("./apps/order/OrderControllers"));
app.use("/vehicle", require("./apps/vehicle/VehicleControllers"));
module.exports = app;
