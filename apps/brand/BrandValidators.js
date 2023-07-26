const { body } = require("express-validator");
const BrandServiceGet = require("./services/BrandServiceGet");

const BrandValidators = {
    brandID: (location = body, forCreate = true, field = "brandID") => {
        return location(field)
            .notEmpty()
            .withMessage("ID Brand wajib diisi.")
            .bail()
            .trim()
            .custom(async (value) => {
                const brand = await BrandServiceGet("brandID", value);

                if (forCreate && brand) {
                    return Promise.reject("brandID sudah digunakan.");
                } else if (!forCreate && !brand) {
                    return Promise.reject("brandID tidak tersedia.");
                }

                return Promise.resolve(value);
            });
    },
    brandName: (location = body, field = "brandName") => {
        return location(field)
            .notEmpty()
            .withMessage("brandName wajib diisi")
            .bail()
            .trim()
    },

};

module.exports = BrandValidators;
