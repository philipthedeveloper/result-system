const router = require("express").Router();
const { homeRoute, userValid } = require("../services/render");
const {
  fetchNominees,
  fetchNomineeScore,
} = require("../controllers/controller");

/**
 * @description homeRoute
 * @method GET
 */
router.get("/", homeRoute);

router.post("/result", userValid);

router.get("/result/:categoryName", fetchNominees);

router.get("/result/score/:categoryName/:nomineeName", fetchNomineeScore);

module.exports = router;
