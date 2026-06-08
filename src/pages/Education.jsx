import { BookOpen, Award, GraduationCap, Calendar, MapPin, Star, Trophy } from 'lucide-react'
import styles from './Education.module.css'

const educationData = [
  {
    degree: 'B.Tech - Artificial Intelligence & Data Science',
    school: 'Adhi College of Engineering and Technology',
    location: 'Chennai, India',
    period: '2023 - Present',
    gpa: '8.02 / 10',
    year: '3rd Year',
    highlights: [
      'Specializing in Machine Learning, Deep Learning & Data Engineering',
      'Active in Smart India Hackathon — Team Captain (2X)',
      'Published research in AI/ML domains',
    ],
    icon: GraduationCap,
    gradient: 'var(--grad-primary)',
  },
  {
    degree: 'Higher Secondary (HSC)',
    school: 'Thiru Kamaraj Higher Secondary School',
    location: 'Villupuram, India',
    period: '2021 - 2023',
    gpa: '72%',
    year: 'Completed',
    highlights: [
      'Science stream with Computer Science focus',
      'Strong foundation in Mathematics & Physics',
      'Typewriting Junior Distinction Certificate',
    ],
    icon: BookOpen,
    gradient: 'var(--grad-green)',
  },
]

const achievements = [
  { icon: Star, label: 'LeetCode', value: '310+ Problems', color: 'var(--yellow)' },
  { icon: Trophy, label: 'SIH', value: '2X Team Captain', color: 'var(--blue)' },
  { icon: Award, label: 'Oracle Certified', value: 'AI Foundations', color: 'var(--green)' },
  { icon: Award, label: 'Tata', value: 'Data Visualization', color: 'var(--primary)' },
]

function Education() {
  return (
    <section className={styles.page}>
      <div className={styles.inner}>
        {/* Header */}
        <div className="section-header">
          <div className="section-label">Academic Journey</div>
          <h2 className="section-title">Education & Achievements</h2>
          <p className="section-subtitle">
            My academic background and notable accomplishments throughout my learning journey.
          </p>
        </div>

        {/* Achievement badges */}
        <div className={styles.achievementRow}>
          {achievements.map(({ icon: Icon, label, value, color }, i) => (
            <div key={i} className={styles.achievementBadge} style={{ '--badge-color': color }}>
              <div className={styles.badgeIcon}>
                <Icon size={22} />
              </div>
              <div className={styles.badgeInfo}>
                <span className={styles.badgeLabel}>{label}</span>
                <span className={styles.badgeValue}>{value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Education timeline cards */}
        <div className={styles.eduGrid}>
          {educationData.map((edu, i) => {
            const IconComponent = edu.icon
            return (
              <div key={i} className={styles.eduCard} style={{ '--card-gradient': edu.gradient }}>
                {/* Decorative top bar */}
                <div className={styles.eduCardBar} />
                
                <div className={styles.eduCardHeader}>
                  <div className={styles.eduIconWrap}>
                    <IconComponent size={28} />
                  </div>
                  <div className={styles.eduMeta}>
                    <span className={styles.eduPeriod}>
                      <Calendar size={13} />
                      {edu.period}
                    </span>
                    <span className={styles.eduYear}>{edu.year}</span>
                  </div>
                </div>

                <h3 className={styles.eduDegree}>{edu.degree}</h3>
                
                <div className={styles.eduSchool}>
                  <MapPin size={14} />
                  <span>{edu.school}, {edu.location}</span>
                </div>

                <div className={styles.eduGpa}>
                  <span className={styles.gpaLabel}>GPA</span>
                  <span className={styles.gpaValue}>{edu.gpa}</span>
                </div>

                <ul className={styles.eduHighlights}>
                  {edu.highlights.map((h, j) => (
                    <li key={j} className={styles.eduHighlightItem}>
                      <span className={styles.highlightDot} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Certifications row */}
        <div className={styles.certSection}>
          <h3 className={styles.certTitle}>
            <Award size={22} />
            <span>Professional Certifications</span>
          </h3>
          <div className={styles.certGrid}>
            <div className={styles.certCard}>
              <div className={styles.certIcon}>
                <Award size={18} />
              </div>
              <div>
                <strong>OCI AI Foundations & Associate</strong>
                <p>Oracle Naan Mudhalvan Tracks</p>
              </div>
            </div>
            <div className={styles.certCard}>
              <div className={styles.certIcon} style={{ background: 'rgba(96,165,250,0.15)', borderColor: 'rgba(96,165,250,0.3)' }}>
                <Award size={18} style={{ color: 'var(--blue)' }} />
              </div>
              <div>
                <strong>Tata Data Visualization</strong>
                <p>Industrial Visualization Structures</p>
              </div>
            </div>
            <div className={styles.certCard}>
              <div className={styles.certIcon} style={{ background: 'rgba(251,191,36,0.15)', borderColor: 'rgba(251,191,36,0.3)' }}>
                <Award size={18} style={{ color: 'var(--yellow)' }} />
              </div>
              <div>
                <strong>Typewriting Junior Distinction</strong>
                <p>Government Certificate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education