import Skill from "./Skill";
import skills from "../assets/dev-data/skills.jsx";
import "./SkillList.css";

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill devSkill={skill} key={skill.id} />
      ))}
    </div>
  );
}

export default SkillList;
