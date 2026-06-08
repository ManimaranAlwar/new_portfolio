import { useState } from 'react'
import { ExternalLink, Folder } from 'lucide-react'
import { GithubIcon } from '../components/SocialIcons'
import styles from './Projects.module.css'

import englishGame from '../assets/englishgame.png'
import adhaarSeeding from '../assets/adharseeding.png'
import imageEnhancement from '../assets/imageEnhancer.png'
import kingdomGame from '../assets/kingdomgame.png'
import spaceRun from '../assets/space_run.png'
import bookBuddy from '../assets/bookBuddy.png'
import placement from '../assets/placement.png'
import dataAnalyst from '../assets/datanalyst.png'
import powerBi from '../assets/powerBi.png'
import retailBilling from '../assets/retail_billing.png'

const projectsData = [
      {
    title: 'Billing system for Retail Store',
    description: 'Comprehensive billing system designed for retail environments, featuring inventory management, sales tracking, and customer invoicing.',
    image: retailBilling,
    badge: 'Shopping Cart',
    category: 'fullstack',
    tags: ['JavaScript', 'React'],
    github: 'https://github.com/ManimaranAlwar/billing_system',
    demo: 'https://billing-system-ecru-xi.vercel.app/',
  },
    {
    title: 'Sales Analytics Dashboard',
    description: 'Business intelligence dashboard project focused on sales analysis, KPI tracking, and decision-making using data visualization.',
    image: dataAnalyst,
    badge: 'Data Analytics',
    category: 'Analytics',
    tags: ['Power BI', 'Analytics', 'BI'],
    github: 'https://github.com/ManimaranAlwar/sales_analytics_dashboard',
    demo: 'https://www.linkedin.com/posts/manimaran-alwar-3a2342320_im-happy-to-share-this-ipl-2025-batsmans-activity-7342429467258068992-aEVQ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFE1N6oB_5MXTECCxdouK8o42DIU9W6Z9dA',
  },
  {
    title: 'English Learning Game for Kids',
    description: 'Interactive web-based game designed to help children learn English through engaging gameplay and educational content.',
    image: englishGame,
    badge: 'Book Buddy Library',
    category: 'Fullstack',
    tags: ['HTML', 'CSS', 'JavaScript', 'Game Dev', 'Team Lead'],
    github: 'https://github.com/ManimaranAlwar/english_games',
    demo: 'https://english-games-two.vercel.app/',
  },

  {
    title: 'Image Enhancement using Python',
    description: 'Image processing application that enhances image quality using Python-based image processing techniques.',
    image: imageEnhancement,
    badge: 'Computer Vision',
    category: 'AI & Data Science',
    tags: ['Python', 'OpenCV', 'Image Processing'],
    github: 'https://github.com/ManimaranAlwar/ImageEnhancement',
    demo: 'https://image-enhancement-mu.vercel.app/',
  },
  {
    title: 'Kingdom Story Game',
    description: "Interactive story-driven educational game developed for Book Buddy Library. Converts children's stories into engaging web-based gameplay.",
    image: kingdomGame,
    badge: 'Production Deploy',
    category: 'Fullstack',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Game Dev'],
    github: 'https://github.com/ManimaranAlwar/kingdom',
    demo: 'https://kingdom-red.vercel.app/',
  },
  {
    title: 'Space Run Game',
    description: 'Interactive web-based game designed to help children learn English through engaging gameplay and educational content.',
    image: spaceRun,
    badge: 'Book Buddy Library',
    category: 'Fullstack',
    tags: ['HTML', 'CSS', 'JavaScript', 'Game Dev', 'Internship'],
    github: 'https://github.com/ManimaranAlwar/space-game-',
    demo: 'https://book-buddy-pied-psi.vercel.app/',
  },
    {
    title: 'Aadhaar Seed & DBT Awareness Platform',
    description: 'Smart India Hackathon project focused on increasing awareness of Aadhaar seeding and Direct Benefit Transfer programs.',
    image: adhaarSeeding,
    badge: 'Smart India Hackathon',
    category: 'AI & Data Science',
    tags: ['HTML', 'CSS', 'JavaScript', 'Analytics', 'Team Lead'],
    github: 'https://github.com/ManimaranAlwar/Adhar-seed-and-DBT-awearness-SIH-',
    demo: 'https://manimaranalwar.github.io/Adhar-seed-and-DBT-awearness-SIH-/',
  },
  {
    title: 'Book Buddy Digital Platform',
    description: 'Library-focused web platform designed to support interactive learning through educational content and browser-based games.',
    image: bookBuddy,
    badge: 'Client Project',
    category: 'Fullstack',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/ManimaranAlwar/Book_Buddy',
    demo: 'https://book-buddy-pied-psi.vercel.app/',
  },
  {
    title: 'Placement Interface System',
    description: 'Recruitment and placement management application developed as part of an internship evaluation process.',
    image: placement,
    badge: 'Internship Project',
    category: 'Fullstack',
    tags: ['JavaScript', 'Frontend', 'UI Design'],
    github: 'https://github.com/ManimaranAlwar/PLACEMENT_INTERFACE_PROJECT_FOR_INTERNSHIP.',
    demo: '#',
  },

  {
    title: 'Power BI Dashboard Suite',
    description: 'Collection of Power BI dashboards for business reporting, performance tracking, and data-driven insights.',
    image: powerBi,
    badge: 'Analytics Portfolio',
    category: 'Analytics',
    tags: ['Power BI', 'Dashboard', 'Data Viz'],
    github: 'https://github.com/ManimaranAlwar/powerBI-dashboard',
    demo: 'https://www.linkedin.com/posts/manimaran-alwar-3a2342320_powerbi-businessintelligence-datavisualization-activity-7358375718889709568-Trd2?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFE1N6oB_5MXTECCxdouK8o42DIU9W6Z9dA',
  },
]

const categories = ['All', 'AI & Data Science', 'Fullstack', 'Analytics']

function Projects() {
  const [filter, setFilter] = useState('All')

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(proj => proj.category === filter)

  return (
    <section className={styles.page}>
      <div className={styles.inner}>
        {/* Header */}
        <div className="section-header">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Key Projects</h2>
          <p className="section-subtitle">
            A curated selection of my work spanning Smart India Hackathons, enterprise software, and analytical portfolios.
          </p>
        </div>

        {/* Filter bar */}
        <div className={styles.filterBar}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterChip}${filter === cat ? ` ${styles.filterChipActive}` : ''}`}
              onClick={() => setFilter(cat)}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, idx) => (
            <article className={styles.projectCard} key={idx} style={{ animationDelay: `${idx * 0.06}s` }}>
              {/* Thumbnail */}
              <div className={styles.projectThumb}>
                {project.image ? (
                  <img src={project.image} alt={project.title} className={styles.projectThumbImg} />
                ) : (
                  <div className={styles.projectThumbPlaceholder}>
                    <Folder size={42} />
                  </div>
                )}
                <div className={styles.projectThumbOverlay} />
                {project.badge && <span className={styles.projectBadge}>{project.badge}</span>}
              </div>

              {/* Body */}
              <div className={styles.projectBody}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>

                <div className={styles.projectTags}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={styles.projectTag}>{tag}</span>
                  ))}
                </div>

                <div className={styles.projectLinksRow}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projectLinkBtn} aria-label={`GitHub for ${project.title}`}>
                      <GithubIcon size={15} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && project.demo !== '#' && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.projectLinkBtn} aria-label={`Live demo for ${project.title}`}>
                      <ExternalLink size={15} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects