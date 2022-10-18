const skills = [
  { skill: "Able to do JS" },
  { skill: "Can troubleShoot" },
  { skill: "Eventually get things done" },
];

function getAll() {
  return skills;
}

function create(skill) {
  skills.push(skill);
}

module.exports = {
  getAll,
  create,
};
