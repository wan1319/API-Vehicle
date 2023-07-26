const { param } = require("express-validator");
const BaseValidatorRun = require("../base/validators/BaseValidatorRun");
const UserServiceTokenAuthentication = require("../user/services/UserServiceTokenAuthentication");

BrandServiceDelete
const BaseValidatorQueryPage = require("../base/validators/BaseValidatorQueryPage");
const BrandServiceEdit = require("./services/BrandServiceEdit");
const BrandServiceGet = require("./services/BrandServiceGet");
const BrandServiceCreate = require("./services/BrandServiceCreate");
const BrandServiceList = require("./services/BrandServiceList");
const BrandServiceDelete = require("./services/BrandServiceDelete");
const BrandValidators = require("./BrandValidators");
const BrandControllers = require("express").Router();

BrandControllers.post(
    "/",
    [
        UserServiceTokenAuthentication,
        BrandValidators.brandID(),
        BrandValidators.brandName(),
    ],
    async (req, res) => {
        const currentUser = req.user;
        const brand = await BrandServiceCreate(
            req.body.brandID,
            req.body.brandName,
            currentUser.userID
        );
        return res.status(201).json(brand);
    }
);

BrandControllers.get(
    "/",
    [
        UserServiceTokenAuthentication,
        BaseValidatorQueryPage(),
        BaseValidatorRun(),
    ],
    async (req, res) => {
        const daftarPotongan = await PotonganServiceList(
            req.query.terms,
            req.query.page
        );
        return res.status(200).json(daftarPotongan);
    }
);

BrandControllers.get(
    "/:brandID",
    [
        UserServiceTokenAuthentication,
        BrandValidators.brandID(param, false),
        BaseValidatorRun(),
    ],
    async (req, res) => {
        const brand = await BrandServiceGet("brandID", req.params.brandID);
        return res.status(200).json(brand);
    }
);

BrandControllers.put(
    "/:brandID",
    [
        UserServiceTokenAuthentication,
        BrandValidators.brandID(param, false),
        BrandValidators.brandName(),
        BaseValidatorRun(),
    ],
    async (req, res) => {
        const brand = await BrandServiceEdit(
            req.params.brandID,
            req.body.brandName,
        );
        return res.status(200).json(brand);
    }
);

BrandControllers.delete(
    "/:brandID",
    [
        UserServiceTokenAuthentication,
        PotonganValidators.brandID(param, false),
        BaseValidatorRun(),
    ],
    async (req, res) => {
        const brand = await BrandServiceDelete(req.params.brandID);
        return res.status(204).json(brand);
    }
);

module.exports = BrandControllers;
