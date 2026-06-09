import * as Icons from 'lucide-react'
import styles from './Skills.module.css'

function SkillCard({ skill }) {
  const { name, category, level, iconName, color } = skill
  const IconComponent = Icons[iconName] || Icons.Award

  return (
    <article className={styles.skillCard} style={{ '--skill-color': color }}>
      <div className={styles.skillIconArea}>
        <div className={styles.skillIconWrap}>
          <IconComponent size={26} strokeWidth={2.2} />
        </div>
      </div>

      <div className={styles.skillCardBody}>
        <span className={styles.skillCategoryLabel}>{category}</span>
        <h3 className={styles.skillNameText}>{name}</h3>
      </div>

      <div className={styles.skillCardFooter}>
        <div className={styles.skillProgressInfo}>
          <span className={styles.skillProgressLabel}>Proficiency</span>
          <span className={styles.skillProgressPct}>{level}%</span>
        </div>
        <div className={styles.skillBarTrack}>
          <div className={styles.skillBarFill} style={{ width: `${level}%` }} />
        </div>
      </div>
    </article>
  )
}

function Skills() {
const skills = [
  { name: "Python", category: "Programming", level: 95, iconName: "FileCode2", color: "#3776ab" },
  { name: "Java", category: "Programming", level: 90, iconName: "Coffee", color: "#f97316" },
  { name: "C Programming", category: "Programming", level: 88, iconName: "Braces", color: "#60a5fa" },
  { name: "SQL", category: "Database", level: 85, iconName: "Database", color: "#22d3ee" },
  { name: "GenAI", category: "AI & Data", level: 92, iconName: "Sparkles", color: "#a855f7" },
  { name: "Deep Learning", category: "AI & Data", level: 80, iconName: "BrainCircuit", color: "#1e2dd4" },
  { name: "AWS", category: "Cloud", level: 45, iconName: "Cloud", color: "#22c55e" },
  { name: "Power BI", category: "Analytics", level: 92, iconName: "BarChart3", color: "#fbbf24" },
  { name: "React", category: "Frontend", level: 92, iconName: "Globe", color: "#06b6d4" },
  { name: "FastAPI", category: "Backend", level: 85, iconName: "Server", color: "#a2ce35" },
  { name: "N8N Automation", category: "Automation", level: 80, iconName: "Workflow", color: "#f87171" },
  { name: "JavaScript", category: "Frontend", level: 80, iconName: "Code2", color: "#facc15" },
  { name: "HTML5", category: "Frontend", level: 85, iconName: "PanelsTopLeft", color: "#f97316" },
  { name: "CSS3", category: "Frontend", level: 82, iconName: "Palette", color: "#38bdf8" },
  { name: "Flask APIs", category: "Backend", level: 75, iconName: "FlaskConical", color: "#a78bfa" },
  { name: "Git & GitHub", category: "Tools", level: 85, iconName: "GitBranch", color: "#fb7185" },
  { name: "Machine Learning", category: "AI & Data", level: 88, iconName: "BrainCircuit", color: "#c084fc" },
  { name: "Predictive Modeling", category: "AI & Data", level: 85, iconName: "TrendingUp", color: "#34d399" },
  { name: "Pandas / NumPy", category: "AI & Data", level: 90, iconName: "Table2", color: "#818cf8" },
  { name: "Prompt Engineering", category: "AI & Data", level: 80, iconName: "Sparkles", color: "#f472b6" },
  { name: "Data Visualization", category: "Analytics", level: 88, iconName: "PieChart", color: "#2dd4bf" },
];

  return (
    <section className={styles.page}>
      <div className={styles.inner}>
        {/* Header */}
        <div className="section-header">
          <div className="section-label">Expertise</div>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            My core competencies spanning data science, programming, and software engineering.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
