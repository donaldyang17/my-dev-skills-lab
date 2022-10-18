const Skill = require("../models/skill");

function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAll(),
    time: req.time,
  });
}

function newSkill(req, res) {
  res.render("skills/new");
}

function create(req, res) {
  console.log(req.body);
  Skill.create(req.body);
  res.redirect("/skills");
}

module.exports = {
  index,
  new: newSkill,
  create,
};
