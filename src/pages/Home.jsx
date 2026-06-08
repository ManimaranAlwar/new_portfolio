import { ArrowRight, Mail, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons'
import profileImg from '../assets/profile_pricture.png'
import styles from './Home.module.css'

function Home({ setActiveTab }) {
  return (
    <section className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.heroGrid}>
          {/* Left: Content */}
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>
              <span className={styles.heroEyebrowLine} />
              Welcome to my universe
            </span>

            <h1 className={styles.heroTitle}>
              Hi, I'm
              <span className={styles.nameHighlight}>Manimaran Alwar</span>
            </h1>

            <p className={styles.heroRole}>
              <strong>AI & Data Science Professional</strong> · Full-Stack Developer
            </p>

            <p className={styles.heroDesc}>
              Forward-thinking AI and Data Science engineer with practical experience building intelligent software architectures, data pipelines, and responsive modern web systems. I translate complex data matrices into actionable, high-impact user experiences.
            </p>

            <div className={styles.heroActions}>
              <button className={styles.btnPrimary} onClick={() => setActiveTab('projects')}>
                <span>View Projects</span>
                <ArrowRight size={18} />
              </button>
              <button className={styles.btnOutline} onClick={() => setActiveTab('contact')}>
                <span>Contact Me</span>
              </button>
            </div>

            <div className={styles.heroSocials}>
              <a href="https://github.com/ManimaranAlwar" target="_blank" rel="noopener noreferrer" className={styles.socialChip} aria-label="GitHub">
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/manimaran-alwar" target="_blank" rel="noopener noreferrer" className={styles.socialChip} aria-label="LinkedIn">
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:amanimaran2005@gmail.com" className={styles.socialChip} aria-label="Email">
                <Mail size={16} />
                <span>Email</span>
              </a>
              <a href="tel:+918610927065" className={styles.socialChip} aria-label="Phone">
                <Phone size={16} />
                <span>Call</span>
              </a>
            </div>
          </div>

          {/* Right: Avatar */}
          <div className={styles.heroAvatarArea}>
            <div className={styles.heroAvatarGlow} />
            <div className={styles.heroAvatarRing}>
              <img
                src={profileImg}
                alt="Manimaran Alwar"
                className={styles.heroAvatarImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
