import Skill from "./Skill";

const SKILLS = [
  {
    name: "HTML",
    yearsOfXp: 3,
  },
  {
    name: "CSS",
    yearsOfXp: 3,
  },
  {
    name: "JavaScript",
    yearsOfXp: 2,
  },
];

function Skills() {
  return SKILLS.map((skill) => (
    <Skill name={skill.name} yearsOfXp={skill.yearsOfXp} />
  ));
}

export default Skills;
