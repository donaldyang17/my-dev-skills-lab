var express = require("express");
const router = express.Router();
const skillsCtrl = require("../controllers/skills");

router.get("/", skillsCtrl.index);

module.exports = router;
