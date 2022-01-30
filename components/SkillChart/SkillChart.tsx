import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faJs, faSass, faReact, faWordpress, faShopify, faMicrosoft } from "@fortawesome/free-brands-svg-icons";

import styles from "./SkillChart.module.css";

const skills = [{
  name: 'HTML',
  icon: faHtml5,
  level: 90
}, {
  name: 'CSS / Sass',
  icon: faSass,
  level: 80
}, {
  name: 'JavaScript / TypeScript',
  icon: faJs,
  level: 75
}, {
  name: 'React',
  icon: faReact,
  level: 50
}, {
  name: 'WordPress',
  icon: faWordpress,
  level: 90
}, {
  name: 'Shopify',
  icon: faShopify,
  level: 65
}, {
  name: 'C# / .NET',
  icon: faMicrosoft,
  level: 50
}];

export const SkillChart = () => {
  return <ul className={styles.skillChart}>
    {skills.map(skill =>
      <li key={skill.name} className={styles.skill}>
        <div className={styles.title}>
          <FontAwesomeIcon className={styles.icon} icon={skill.icon} />
          <span>{skill.name}</span>
        </div>
        <div className={styles.level}>
          <div className={styles.levelAmount} style={{ width: `${skill.level}%` }}></div>
        </div>
      </li>
    )}
  </ul>;
};