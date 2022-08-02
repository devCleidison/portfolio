import StudyingPerson from '../../assets/studying-person.png'
import { SkillCard } from '../../components/SkillCard';

import { skills } from '../../data/data'

import './styles.scss'

export const Skills = () => {
  return (
    <section id="skills">
      <div className="content">
        <div className="col-a">
          <img src={StudyingPerson} alt="Ilustração de uma pessoa estudando" />
        </div>
        <div className="col-b">
          {skills.map(skill => <SkillCard key={skill.id} skill={skill}/>)}
        </div>
      </div>
    </section>
  );
};
