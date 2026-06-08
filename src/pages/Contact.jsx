import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { LinkedinIcon } from '../components/SocialIcons'
import styles from './Contact.module.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' })
      return
    }
    setLoading(true)
    setStatus({ type: '', message: '' })
    setTimeout(() => {
      setLoading(false)
      setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' })
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  return (
    <section className={styles.page}>
      <div className={styles.inner}>
        {/* Header */}
        <div className="section-header">
          <div className="section-label">Let's Connect</div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Feel free to send a message or contact me directly through my social channels.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.contactGrid}>
          {/* Left: Info cards */}
          <div className={styles.contactInfoCol}>
            <div className={styles.contactInfoCard}>
              <div className={styles.contactInfoIconWrap}>
                <Mail size={20} />
              </div>
              <div className={styles.contactInfoTextGroup}>
                <span className={styles.contactInfoLabel}>Email</span>
                <a href="mailto:amanimaran2005@gmail.com" className={styles.contactInfoValue}>
                  amanimaran2005@gmail.com
                </a>
              </div>
            </div>

            <div className={styles.contactInfoCard}>
              <div className={styles.contactInfoIconWrap}>
                <Phone size={20} />
              </div>
              <div className={styles.contactInfoTextGroup}>
                <span className={styles.contactInfoLabel}>Phone</span>
                <a href="tel:+918610927065" className={styles.contactInfoValue}>
                  +91 8610927065
                </a>
              </div>
            </div>

            <div className={styles.contactInfoCard}>
              <div className={styles.contactInfoIconWrap}>
                <MapPin size={20} />
              </div>
              <div className={styles.contactInfoTextGroup}>
                <span className={styles.contactInfoLabel}>Location</span>
                <span className={styles.contactInfoValue}>Chennai, India</span>
              </div>
            </div>

            <div className={styles.contactInfoCard}>
              <div className={styles.contactInfoIconWrap}>
                <LinkedinIcon size={20} />
              </div>
              <div className={styles.contactInfoTextGroup}>
                <span className={styles.contactInfoLabel}>LinkedIn</span>
                <a
                  href="https://linkedin.com/in/manimaran-alwar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactInfoValue}
                >
                  in/manimaran-alwar
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className={styles.availabilityCard}>
              <span className={styles.availabilityDot} />
              <div>
                <div className={styles.availabilityText}>Available for opportunities</div>
                <div className={styles.availabilitySub}>Open to full-time & freelance roles</div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className={styles.contactFormCard}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label htmlFor="name" className={styles.formLabel}>Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={styles.formControl}
                    required
                  />
                </div>
                <div className={styles.formField}>
                  <label htmlFor="email" className={styles.formLabel}>Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className={styles.formControl}
                    required
                  />
                </div>
              </div>

              <div className={styles.formField}>
                <label htmlFor="subject" className={styles.formLabel}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Topic of discussion"
                  className={styles.formControl}
                />
              </div>

              <div className={styles.formField}>
                <label htmlFor="message" className={styles.formLabel}>Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className={`${styles.formControl} ${styles.textarea}`}
                  required
                />
              </div>

              {status.message && (
                <div className={`${styles.formStatus} ${status.type === 'success' ? styles.formStatusSuccess : styles.formStatusError}`}>
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className={styles.contactSubmitBtn}
                disabled={loading}
              >
                {loading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={17} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
