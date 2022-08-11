const NOMINEES = require("../constants/nominee");
const SCORE = require("../constants/nomineeScore");

const fetchNominees = (req, res) => {
  const categoryName = req.params.categoryName;
  const category = NOMINEES.find(
    (nominee) => nominee.categoryName === categoryName
  );
  if (!category) {
    res.status(404).send({ ok: false, message: "Category options not found" });
  }
  const nominee = category.nominees;
  res.send(JSON.stringify(nominee));
};

const fetchNomineeScore = (req, res) => {
  const { categoryName, nomineeName } = req.params;
  const category = SCORE.find(
    (category) => category.categoryName === categoryName
  );
  const score = category.nominees.find(
    (nominee) => nominee.name === nomineeName
  );

  res.send(JSON.stringify(score));
};

module.exports = { fetchNominees, fetchNomineeScore };
