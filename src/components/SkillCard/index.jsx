import './styles.scss'

export const SkillCard = ({skill}) => {
  return (
    <divc className='skill-card'>
      <img src={skill.image} alt={`Imagem da tecnologia ${skill.name}`} />

      <span className='title-skill-card'>{skill.name}</span>
    </divc>
  )
}
