import { ExternalLink, Folder } from 'lucide-react'
import { GithubIcon } from './SocialIcons'

function ProjectCard({ project }) {
  const { title, description, image, badge, tags, github, demo } = project

  return (
    <div className="project-card glass-panel">
      <div className="project-image-box">
        {image ? (
          <img src={image} alt={title} className="project-image" />
        ) : (
          <div className="project-image-placeholder">
            <Folder size={48} />
          </div>
        )}
        <div className="project-image-overlay"></div>
        {badge && <span className="project-badge">{badge}</span>}
      </div>

      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{description}</p>
        
        <div className="project-tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="project-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-links">
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link-item"
              aria-label={`GitHub link for ${title}`}
            >
              <GithubIcon size={18} />
              <span>Code</span>
            </a>
          )}
          {demo && (
            <a 
              href={demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link-item"
              aria-label={`Live demo link for ${title}`}
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
