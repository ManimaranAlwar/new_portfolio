import { useCallback, useEffect, useRef, useState } from 'react'
import { Home, User, GraduationCap, Brain, Folder, Mail } from 'lucide-react'
import styles from './NavBar.module.css'

const NAV_LINKS = [
  { id: 'home',     label: 'Home',      Icon: Home         },
  { id: 'about',   label: 'About',     Icon: User         },
  { id: 'education',label: 'Education', Icon: GraduationCap },
  { id: 'skills',  label: 'Skills',    Icon: Brain        },
  { id: 'projects',label: 'Projects',  Icon: Folder       },
  { id: 'contact', label: 'Contact',   Icon: Mail         },
]

function NavBar({ activeTab, setActiveTab }) {
  const [pillStyle, setPillStyle] = useState({ transform: 'translateX(0px)', width: '0px' })
  const tabRefs = useRef([])

  const activeIndex = NAV_LINKS.findIndex(l => l.id === activeTab)

  const updatePill = useCallback(() => {
    const el = tabRefs.current[activeIndex]
    if (el) {
      setPillStyle({
        transform: `translateX(${el.offsetLeft}px)`,
        width: `${el.offsetWidth}px`,
      })
    }
  }, [activeIndex])

  useEffect(() => {
    updatePill()
    window.addEventListener('resize', updatePill)
    return () => window.removeEventListener('resize', updatePill)
  }, [updatePill])

  return (
    <nav className={styles.navDockWrapper} role="tablist" aria-label="Portfolio navigation">
      <div className={styles.navDock}>
        {/* Sliding pill */}
        <div className={styles.navPill} style={pillStyle} aria-hidden="true" />

        {NAV_LINKS.map(({ id, label, Icon }, index) => {
          const isActive = activeTab === id
          return (
            <button
              key={id}
              ref={el => (tabRefs.current[index] = el)}
              className={`${styles.navTab}${isActive ? ` ${styles.navTabActive}` : ''}`}
              onClick={() => setActiveTab(id)}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${id}`}
              aria-label={label}
              type="button"
            >
              <span className={styles.navTabIcon}>
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              </span>
              <span className={styles.navTabLabel}>{label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default NavBar
