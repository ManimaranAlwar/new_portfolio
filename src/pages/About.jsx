import { Download, Target, MapPin, Coffee, Heart } from 'lucide-react'
import styles from './About.module.css'

function About() {
  const handleDownloadResume = () => {
    alert('Resume download triggered. Please request the full print copy from amanimaran2005@gmail.com!')
  }

  return (
    <section className={styles.page}>
      <div className={styles.inner}>
        {/* Header */}
        <div className="section-header">
          <div className="section-label">About Me</div>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle">
            A glimpse into my professional background, passions, and what drives me.
          </p>
        </div>

        {/* Main content + profile */}
        <div className={styles.aboutGrid}>
          {/* Left: Bio — bigger */}
          <div className={styles.aboutBioCard}>
            <h3>My Story</h3>
            <p>
              I am a B.Tech Artificial Intelligence and Data Science undergraduate at <strong>Adhi College of Engineering and Technology</strong>. I specialize in building data pipelines, machine learning architectures, and responsive full-stack applications that make a real impact.
            </p>
            <p>
              My objective is to deploy high-impact models in challenging technology environments. I enjoy translating unstructured data into clean visualizations, and coding interactive games and workflow automations that solve real problems.
            </p>
            <div className={styles.bioHighlights}>
              <div className={styles.bioHighlightItem}>
                <Target size={18} style={{ color: 'var(--blue)' }} />
                <span>310+ DSA problems solved</span>
              </div>
              <div className={styles.bioHighlightItem}>
                <Coffee size={18} style={{ color: 'var(--yellow)' }} />
                <span>Full-stack & AI enthusiast</span>
              </div>
              <div className={styles.bioHighlightItem}>
                <Heart size={18} style={{ color: 'var(--pink)' }} />
                <span>Open-source contributor</span>
              </div>
            </div>
            <button className={styles.aboutDownloadBtn} onClick={handleDownloadResume}>
              <Download size={18} />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Right: Stats — bigger cards */}
          <div className={styles.aboutStatsPanel}>
            <div className={styles.statCardWide}>
              <div className={styles.statNumberLarge}>8.02</div>
              <div className={styles.statLabelLarge}>B.Tech GPA / 10</div>
              <div className={styles.statBar}>
                <div className={styles.statBarFill} style={{ width: '80%' }} />
              </div>
            </div>
            <div className={styles.statsGrid}>
              <div className={styles.statCardSmall}>
                <div className={styles.statNumber}>310+</div>
                <div className={styles.statLabel}>LeetCode</div>
              </div>
              <div className={styles.statCardSmall}>
                <div className={styles.statNumber}>2X</div>
                <div className={styles.statLabel}>SIH Captain</div>
              </div>
              <div className={styles.statCardSmall}>
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statLabel}>Projects</div>
              </div>
              <div className={styles.statCardSmall}>
                <div className={styles.statNumber}>3</div>
                <div className={styles.statLabel}>Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
