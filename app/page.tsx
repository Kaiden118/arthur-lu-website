const skills = [
  'Python',
  'PyTorch',
  'LLM agents',
  'Diffusion models',
  'Transformers',
  'OpenCV',
  'C++',
  'JavaScript',
]

export default function Page() {
  return (
    <main className="canvas">
      <article className="calling-card" aria-labelledby="profile-name">
        <header className="card-header">
          <a className="wordmark" href="#profile-name" aria-label="Arthur Lu, home">
            <span className="wordmark-mark">AL</span>
            <span>PERSONAL PROFILE</span>
          </a>
          <span className="location">LOS ANGELES, CA <span aria-hidden="true">/</span> 2026</span>
        </header>

        <div className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> USC · M.S. COMPUTER SCIENCE</p>
            <h1 id="profile-name">Arthur Lu</h1>
            <p className="full-name">Zechuan Lu</p>
            <p className="intro">
              I build machine learning systems, from <strong>LLM agents</strong> to <strong>generative models</strong>.
              Currently studying computer science at the University of Southern California.
            </p>
          </div>
          <aside className="availability" aria-label="Internship availability">
            <span className="availability-label">OPEN TO OPPORTUNITIES</span>
            <p>Summer 2027</p>
            <span>ML / AI engineering · Software development</span>
          </aside>
        </div>

        <div className="details-grid">
          <div className="detail-column">
            <div className="detail-block education-block">
              <h2>EDUCATION</h2>
              <p className="detail-title">M.S. Computer Science <span>· USC</span></p>
              <p className="detail-subtitle">Los Angeles, California</p>
              <p className="detail-title second-title">B.S. (Hons) Computer Science with AI</p>
              <p className="detail-subtitle">University of Nottingham Ningbo China <span>· 2022—2026</span></p>
            </div>
            <div className="detail-block research-block">
              <h2>RESEARCH</h2>
              <p className="detail-title">CMCD <span>— First author</span></p>
              <p className="detail-subtitle">Conditional Diffusion Model for Medical Image Modality Translation · ICONIP 2026</p>
            </div>
          </div>

          <div className="detail-column work-column">
            <div className="detail-block projects-block">
              <h2>SELECTED WORK</h2>
              <p className="detail-title">RunSleuth</p>
              <p className="detail-subtitle">An LLM-agent tool for diagnosing PyTorch training failures.</p>
              <p className="detail-title second-title">MotionCaptureSystem</p>
              <p className="detail-subtitle">Multi-camera 6-DoF tracking.</p>
            </div>
            <div className="detail-block skills-block">
              <h2>TOOLKIT</h2>
              <ul className="skills-list" aria-label="Technical skills">
                {skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </div>
          </div>
        </div>

        <footer className="card-footer">
          <a className="email-link" href="mailto:zechuanl@usc.edu">zechuanl@usc.edu <span aria-hidden="true">↗</span></a>
          <nav className="social-links" aria-label="Professional links">
            <a href="https://github.com/Kaiden118" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            <a href="https://linkedin.com/in/zechuan-lu-6923a1371" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          </nav>
        </footer>
      </article>
    </main>
  )
}
