'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, CodeXml, FolderGit2, Mail, Menu, X } from 'lucide-react'

const cmcdRepository = 'https://github.com/Kaiden118/Cross-Modality-Conditional-Diffusion-Model'
const berberinePaper = 'https://doi.org/10.1016/j.ijbiomac.2024.133370'

const navigation = [
  { number: '01.', label: 'About', href: '#about' },
  { number: '02.', label: 'Publications', href: '#publications' },
  { number: '03.', label: 'Projects', href: '#projects' },
  { number: '04.', label: 'Experience', href: '#experience' },
  { number: '05.', label: 'Skills', href: '#skills' },
  { number: '06.', label: 'Contact', href: '#contact' },
]

const projects = [
  {
    title: 'RunSleuth',
    repositoryUrl: 'https://github.com/kaiden118/runsleuth-evidence-grounded-ml-training-failure-diagnosis-and-repair-verification',
    date: 'Sep 2026 – Present',
    description: 'Evidence-grounded ML failure diagnosis & repair verification — a tool-calling LLM agent that diagnoses PyTorch training failures including silent faults and verifies proposed repairs against evidence.',
    tags: ['PyTorch', 'LLM agent', 'training failures'],
  },
  {
    title: 'CMCD',
    repositoryUrl: cmcdRepository,
    date: 'Jun 2025 – May 2026',
    description: 'Conditional diffusion model for T1/T2 MRI modality translation (ICONIP 2026).',
    tags: ['diffusion models', 'MRI', 'medical imaging'],
  },
  {
    title: 'MotionCaptureSystem',
    repositoryUrl: 'https://github.com/kaiden118/motioncapturesystem',
    date: 'Oct 2024 – Apr 2025',
    description: 'Multi-camera 6-DoF object tracking with calibrated camera geometry and real-time pose estimation.',
    tags: ['multi-camera', '6-DoF', 'pose estimation'],
  },
]

const experience = [
  {
    date: 'Jun 2025 – Aug 2025',
    role: 'Undergraduate Research Assistant, UNNC',
    description: 'HoloLens 2 rehabilitation pose tracking with OpenPose and Unity; contributed to a conference manuscript.',
  },
  {
    date: 'Jun 2024 – Aug 2024',
    role: 'Undergraduate Research Intern, UNNC',
    description: 'Built a Raspberry Pi/Arduino IoT intrusion-detection testbed.',
  },
  {
    date: 'Jan 2024 – Feb 2024',
    role: 'Software Development Intern, Shenzhen Topsky Software',
    description: 'Developed a WeChat Mini Program for healthcare workflows; cut appointment time by 30%.',
  },
  {
    date: 'Sep 2022 – Oct 2023',
    role: 'Mechanical Group Member, UNNC Formula Student Electric Racing Team',
    description: 'Contributed to chassis analysis, SOLIDWORKS, bill of materials, and fabrication.',
  },
]

const languages = ['Python', 'C++', 'JavaScript', 'Java', 'C#', 'SQL'] as const

const skillGroups = [
  { label: 'Languages', items: languages },
  { label: 'ML/GenAI', items: ['PyTorch', 'OpenCV', 'LLM agents', 'diffusion models', 'Transformers', 'Hugging Face', 'OpenAI API'] },
  { label: 'Frameworks', items: ['Flask', 'FastAPI', 'Vue.js', 'Socket.IO'] },
]

function SectionHeading({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <h2 className="section-heading">
      <span className="section-number">{number}</span>
      <span>{children}</span>
      <span className="section-rule" aria-hidden="true" />
    </h2>
  )
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    revealElements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Arthur Lu home">AL<span>.</span></a>
        <div className="header-actions">
          <a className="resume-link" href="/cv.pdf" target="_blank" rel="noreferrer">Resume</a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
        <nav id="site-navigation" className={`site-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation" aria-hidden={!menuOpen}>
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
              <span>{item.number}</span> {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="main" className="portfolio-shell">
        <section id="top" className="hero" aria-labelledby="hero-title">
          <p className="eyebrow">Hi, my name is</p>
          <h1 id="hero-title">Arthur Lu<span>.</span></h1>
          <p className="hero-subtitle">M.S. Computer Science @ USC.</p>
          <p className="hero-copy">My interests are in machine learning for medical imaging, LLM agents, and building reliable ML systems — from diffusion models for MRI modality translation to diagnosing silent training faults and verifying automated repairs.</p>
          <a className="outline-button" href="mailto:zechuanl@usc.edu">Get In Touch</a>
          <div className="hero-contact" aria-label="Contact and profiles">
            <a href="mailto:zechuanl@usc.edu"><Mail aria-hidden="true" /> zechuanl@usc.edu</a>
            <a href="https://github.com/Kaiden118" target="_blank" rel="noreferrer"><CodeXml aria-hidden="true" /> GitHub</a>
            <a href="https://linkedin.com/in/zechuan-lu-6923a1371" target="_blank" rel="noreferrer"><span className="linkedin-icon" aria-hidden="true">in</span> LinkedIn</a>
          </div>
        </section>

        <section id="about" className="portfolio-section" data-reveal aria-labelledby="about-heading">
          <SectionHeading number="01.">About</SectionHeading>
          <div className="section-copy">
            <p>I am a first-year M.S. student in Computer Science at the University of Southern California. My interests are in machine learning for medical imaging, LLM agents, and building reliable ML systems — from diffusion models for MRI modality translation to diagnosing silent training faults and verifying automated repairs. Previously I received a B.S. (Hons) in Computer Science with Artificial Intelligence from the University of Nottingham Ningbo China, where my undergraduate thesis developed a cross-modality conditional diffusion model for T1/T2 MRI translation. I am seeking a 2027 summer internship in ML/AI engineering or software development.</p>
          </div>
          <div className="education-block">
            <h3>Education</h3>
            <article className="education-entry">
              <div className="education-heading"><strong>University of Southern California</strong><span>Aug 2026 – May 2028</span></div>
              <p>Los Angeles — M.S. in Computer Science</p>
            </article>
            <article className="education-entry">
              <div className="education-heading"><strong>University of Nottingham Ningbo China</strong><span>Sep 2022 – Jul 2026</span></div>
              <p>Ningbo — B.S. (Hons) in Computer Science with Artificial Intelligence, Second-Class Honours (Division One)</p>
              <p>Thesis: Cross-Modality Conditional Diffusion for T1 &amp; T2 MRI Translation.</p>
            </article>
          </div>
        </section>

        <section id="publications" className="portfolio-section" data-reveal aria-labelledby="publications-heading">
          <SectionHeading number="02.">Publications</SectionHeading>
          <ol className="publication-list">
            <li className="publication-item">
              <p className="publication-citation"><strong className="author-highlight">Lu, Z.</strong>, Huang, M., &amp; He, X. <a className="publication-title" href={cmcdRepository} target="_blank" rel="noreferrer">CMCD: Conditional Diffusion Model for Medical Image Modality Translation.</a> <em>International Conference on Neural Information Processing (ICONIP)</em>, 2026.</p>
              <a className="publication-code" href={cmcdRepository} target="_blank" rel="noreferrer">[code]</a>
            </li>
            <li className="publication-item">
              <p className="publication-citation">Fan, S., <strong className="author-highlight">Lu, Z.</strong>, Yan, Z., &amp; Hu, L. <a className="publication-title" href={berberinePaper} target="_blank" rel="noreferrer">Interactions of Three Berberine Mid-Chain Fatty Acid Salts with Bovine Serum Albumin (BSA): Spectroscopic Analysis and Molecular Docking.</a> <em>International Journal of Biological Macromolecules</em>, 274, 133370, 2024.</p>
              <a className="publication-code" href={berberinePaper} target="_blank" rel="noreferrer">[paper]</a>
            </li>
          </ol>
        </section>

        <section id="projects" className="portfolio-section" data-reveal aria-labelledby="projects-heading">
          <SectionHeading number="03.">Projects</SectionHeading>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-card-top">
                  <FolderGit2 aria-hidden="true" />
                  <a className="project-link" href={project.repositoryUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>
                    <CodeXml aria-hidden="true" />
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </div>
                <h3><a href={project.repositoryUrl} target="_blank" rel="noreferrer">{project.title}</a></h3>
                <p className="project-date">{project.date}</p>
                <p className="project-description">{project.description}</p>
                <ul className="tag-list" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="portfolio-section" data-reveal aria-labelledby="experience-heading">
          <SectionHeading number="04.">Experience</SectionHeading>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-row" key={item.role}>
                <p className="experience-date">{item.date}</p>
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="portfolio-section" data-reveal aria-labelledby="skills-heading">
          <SectionHeading number="05.">Skills</SectionHeading>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.label} data-skill-group={group.label}>
                <h3>{group.label}</h3>
                <ul>{group.items.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section" data-reveal aria-labelledby="contact-heading">
          <p className="eyebrow">06. What&apos;s next?</p>
          <h2 id="contact-heading">Get In Touch</h2>
          <p>I am seeking a 2027 summer internship in ML/AI engineering or software development.</p>
          <a className="outline-button" href="mailto:zechuanl@usc.edu">Say Hello</a>
          <div className="contact-links">
            <a href="mailto:zechuanl@usc.edu">zechuanl@usc.edu</a>
            <a href="https://github.com/Kaiden118" target="_blank" rel="noreferrer">github.com/Kaiden118</a>
            <a href="https://linkedin.com/in/zechuan-lu-6923a1371" target="_blank" rel="noreferrer">linkedin.com/in/zechuan-lu-6923a1371</a>
          </div>
        </section>

        <footer className="site-footer">Last updated October 2026.</footer>
      </main>

      <aside className="side-contact side-contact-left" aria-label="GitHub profile">
        <a href="https://github.com/Kaiden118" target="_blank" rel="noreferrer" aria-label="GitHub profile"><CodeXml aria-hidden="true" /></a>
        <span aria-hidden="true" />
      </aside>
    </>
  )
}
