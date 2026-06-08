import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Education from './pages/Education'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const sections = [
  { id: 'home',     Component: Home      },
  { id: 'about',   Component: About     },
  { id: 'education',Component: Education },
  { id: 'skills',  Component: Skills    },
  { id: 'projects',Component: Projects  },
  { id: 'contact', Component: Contact   },
]

function App() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="app-shell">
      {/* Animated background */}
      <div className="app-bg" aria-hidden="true">
        <div className="app-bg-gradient" />
        <div className="app-bg-grid" />
      </div>

      {/* Top header */}
      <header className="app-header">
        <div className="header-logo">
          <span className="text-gradient">MANIMARAN.A</span>
        </div>
        <div className="header-badge">
          <span className="header-badge-dot" />
          <span>Open to Work</span>
        </div>
      </header>

      {/* Page content area */}
      <main className="page-viewport">
        {sections.map(({ id, Component }) => (
          <div
            key={id}
            className={`tab-section${activeTab === id ? ' active' : ''}`}
            aria-hidden={activeTab !== id}
            role="tabpanel"
            id={`panel-${id}`}
          >
            <Component setActiveTab={setActiveTab} />
          </div>
        ))}
      </main>

      {/* Bottom iOS tab bar */}
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}

export default App
