const { body } = require("express-validator");
const VehicleServiceGet = require("./services/VehicleServiceGet");

const VehicleValidators = {
  vehicleID: (location = body, forCreate = true, field = "vehicleID") => {
    return location(field)
      .notEmpty()
      .withMessage("ID Vehicle wajib diisi.")
      .bail()
      .trim()
      .custom(async (value) => {
        const vehicle = await VehicleServiceGet(value);
        if (forCreate && vehicle) {
          return Promise.reject("vehicleID sudah digunakan.");
        } else if (!forCreate && !vehicle) {
          return Promise.reject("vehicleID tidak tersedia.");
        }
        return Promise.resolve(value);
      });
  },
  brandID: async (location = body, field = "brandID") => {
    const brandID = location(field)
    .trim()
    .escape()
    .notEmpty()
    .withMessage("Brand ID wajib diisi.")
    .bail();
    if (brandID.isEmpty()) {
      throw new Error("Brand ID wajib diisi.");
    }

    const brand = await BrandServiceGet(brandID);
    if (!brand) {
      throw new Error("Brand ID tidak tersedia.");
    }
    return brand;
  },
  vehicleName: (location = body, field = "vehicleName") => {
    return location(field)
      .notEmpty()
      .withMessage("Vehicle name wajib diisi.")
      .bail()
      .trim()
  },
  price: (location = body, field = "price") => {
    return location(field)
      .notEmpty()
      .withMessage("Price wajib diisi.")
      .bail()
      .trim()
      .isNumeric()
      .withMessage("Price harus berupa angka.")
      .bail()
      .custom((value) => {
        const price = parseFloat(value);
        if (price <= 0) {
          throw new Error("Price harus lebih dari 0.");
        }
        return true;
      });
  },
  year: (location = body, field = "year") => {
    return location(field)
      .notEmpty()
      .withMessage("Year wajib diisi.")
      .bail()
      .trim()
      .isInt({ min: 1900, max: new Date().getFullYear() })
      .withMessage("Year harus berupa angka antara 1900 dan tahun sekarang.");
  },
};

module.exports = VehicleValidators;
