const allUsers = require("../constants/NEWDATABASE");
const CATEGORIES = require("../constants/nominee");

const homeRoute = (req, res) => {
  const valid = req.query.valid;
  const hasvoted = req.query.hasvoted;
  if (valid === "false") {
    return res.render("index", { invalid: "false" });
  }
  if (hasvoted === "true") {
    return res.render("index", { hasVoted: "false" });
  }
  res.render("index");
};

const userValid = async (req, res) => {
  const userValid = allUsers.find(
    (user) =>
      user.matricNo === req.body.matric_no &&
      user.surname.toLowerCase() === req.body.surname.toLowerCase().trim()
  );
  if (!userValid) {
    res.redirect("/?valid=false");
  } else {
    res.render("result", { CATEGORIES, NOMINEES: [] });
  }
};

module.exports = { homeRoute, userValid };
