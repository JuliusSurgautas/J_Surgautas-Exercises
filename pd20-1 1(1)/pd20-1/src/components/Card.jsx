import Avatar from "./Avatar.jsx";
import Intro from "./Intro.jsx";
import SkillList from "./SkillList.jsx";
import "./Card.css";

function Card({ isAvailable }) {
  const cardClassName = isAvailable ? "card available" : "card not-available";

  return (
    <>
    <div className={cardClassName}>
      <Avatar />
      <Intro />
      <SkillList />
      
    </div>


</>



  );
}

export default Card;
