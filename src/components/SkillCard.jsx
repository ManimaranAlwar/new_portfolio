import * as Icons from 'lucide-react'

function SkillCard({ skill }) {
  const { name, category, level, iconName, color } = skill
  const IconComponent = Icons[iconName] || Icons.Award

  return (
    <article className="skill-card glass-panel" style={{ '--skill-color': color }}>
      <div className="skill-logo-wrap">
        <div className="skill-logo">
          <IconComponent size={30} strokeWidth={2.2} />
        </div>
      </div>

      <div className="skill-card-body">
        <span className="skill-category">{category}</span>
        <h3 className="skill-card-title">{name}</h3>
      </div>

      <div className="skill-card-footer">
        <div className="skill-info">
          <span className="skill-name">Proficiency</span>
          <span className="skill-percentage">{level}%</span>
        </div>
        <div className="skill-bar-bg">
          <div className="skill-bar-fill" style={{ width: `${level}%` }}></div>
        </div>
      </div>
    </article>
  )
}

export default SkillCard
