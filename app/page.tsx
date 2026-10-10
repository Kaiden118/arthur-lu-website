const githubProject = 'https://github.com/Kaiden118'

export default function Page() {
  return (
    <main className="page-shell">
      <article className="academic-homepage">
        <header className="profile-header">
          <h1>Arthur Lu</h1>
          <p className="subtitle">M.S. Computer Science, University of Southern California (2026–2028)</p>
          <nav className="contact-line" aria-label="Contact and profiles">
            <a href="mailto:zechuanl@usc.edu">zechuanl@usc.edu</a>
            <span aria-hidden="true">/</span>
            <span>GitHub: <a href="https://github.com/Kaiden118" target="_blank" rel="noreferrer">github.com/Kaiden118</a></span>
            <span aria-hidden="true">/</span>
            <span>LinkedIn: <a href="https://linkedin.com/in/zechuan-lu-6923a1371" target="_blank" rel="noreferrer">linkedin.com/in/zechuan-lu-6923a1371</a></span>
            <span aria-hidden="true">/</span>
            <a href="/cv.pdf" target="_blank" rel="noreferrer">CV (PDF)</a>
          </nav>
        </header>

        <section className="content-section" aria-labelledby="about-heading">
          <h2 id="about-heading">About</h2>
          <p>
            I am a first-year M.S. student in Computer Science at the University of Southern California. My interests are in machine learning for medical imaging, LLM agents, and building reliable ML systems — from diffusion models for MRI modality translation to diagnosing silent training faults and verifying automated repairs. Previously I received a B.S. (Hons) in Computer Science with Artificial Intelligence from the University of Nottingham Ningbo China, where my undergraduate thesis developed a cross-modality conditional diffusion model for T1/T2 MRI translation. I am seeking a 2027 summer internship in ML/AI engineering or software development.
          </p>
        </section>

        <section className="content-section" aria-labelledby="education-heading">
          <h2 id="education-heading">Education</h2>
          <div className="entry">
            <div className="entry-heading">
              <strong>University of Southern California</strong>
              <span>Aug 2026 – May 2028</span>
            </div>
            <p>Los Angeles — M.S. in Computer Science</p>
          </div>
          <div className="entry">
            <div className="entry-heading">
              <strong>University of Nottingham Ningbo China</strong>
              <span>Sep 2022 – Jul 2026</span>
            </div>
            <p>Ningbo — B.S. (Hons) in Computer Science with Artificial Intelligence, Second-Class Honours (Division One)</p>
            <p>Thesis: Cross-Modality Conditional Diffusion for T1 &amp; T2 MRI Translation.</p>
          </div>
        </section>

        <section className="content-section" aria-labelledby="publications-heading">
          <h2 id="publications-heading">Publications</h2>
          <ol className="publication-list">
            <li>
              <span className="publication-title">CMCD: Conditional Diffusion Model for Medical Image Modality Translation.</span> Lu, Z., et al. International Conference on Neural Information Processing (ICONIP), 2026. <strong>First author.</strong> 0.90 SSIM / 27.5 dB PSNR on BraTS 2019/2020.
            </li>
            <li>
              <span className="publication-title">Interactions of Three Berberine Mid-Chain Fatty Acid Salts with Bovine Serum Albumin (BSA): Spectroscopic Analysis and Molecular Docking.</span> Fan, S., Lu, Z., Yan, Z., &amp; Hu, L. <em>International Journal of Biological Macromolecules</em>, 274, 133370, 2024. Second author.
            </li>
          </ol>
        </section>

        <section className="content-section" aria-labelledby="projects-heading">
          <h2 id="projects-heading">Projects</h2>
          <ul className="plain-list">
            <li>
              <div className="entry-heading">
                <strong><a href={githubProject} target="_blank" rel="noreferrer">RunSleuth</a></strong>
                <span>Sep 2026 – Present</span>
              </div>
              <p>Evidence-grounded ML failure diagnosis &amp; repair verification — a tool-calling LLM agent that diagnoses PyTorch training failures including silent faults and verifies proposed repairs against evidence.</p>
            </li>
            <li>
              <div className="entry-heading">
                <strong><a href={githubProject} target="_blank" rel="noreferrer">CMCD</a></strong>
              </div>
              <p>Conditional diffusion model for T1/T2 MRI modality translation (first-author research, ICONIP 2026).</p>
            </li>
            <li>
              <div className="entry-heading">
                <strong><a href={githubProject} target="_blank" rel="noreferrer">MotionCaptureSystem</a></strong>
              </div>
              <p>Multi-camera 6-DoF object tracking with calibrated camera geometry and real-time pose estimation.</p>
            </li>
          </ul>
        </section>

        <section className="content-section" aria-labelledby="experience-heading">
          <h2 id="experience-heading">Experience</h2>
          <ul className="plain-list experience-list">
            <li>
              <div className="entry-heading"><strong>Undergraduate Research Assistant, UNNC</strong><span>Jun 2025 – Aug 2025</span></div>
              <p>HoloLens 2 rehabilitation pose tracking with OpenPose and Unity; contributed to a conference manuscript.</p>
            </li>
            <li>
              <div className="entry-heading"><strong>Undergraduate Research Intern, UNNC</strong><span>Jun 2024 – Aug 2024</span></div>
              <p>Built a Raspberry Pi/Arduino IoT intrusion-detection testbed.</p>
            </li>
            <li>
              <div className="entry-heading"><strong>Software Development Intern, Shenzhen Topsky Software</strong><span>Jan 2024 – Feb 2024</span></div>
              <p>Developed a WeChat Mini Program for healthcare workflows; cut appointment time by 30%.</p>
            </li>
            <li>
              <div className="entry-heading"><strong>Mechanical Group Member, UNNC Formula Student Electric Racing Team</strong><span>Sep 2022 – Oct 2023</span></div>
              <p>Contributed to chassis analysis, SOLIDWORKS, bill of materials, and fabrication.</p>
            </li>
          </ul>
        </section>

        <section className="content-section skills-section" aria-labelledby="skills-heading">
          <h2 id="skills-heading">Skills</h2>
          <p><strong>Languages:</strong> Python, C++, JavaScript, Java, C#, SQL.</p>
          <p><strong>ML/GenAI:</strong> PyTorch, OpenCV, LLM agents, diffusion models, Transformers, Hugging Face, OpenAI API.</p>
          <p><strong>Frameworks:</strong> Flask, FastAPI, Vue.js, Socket.IO.</p>
        </section>

        <footer className="page-footer">Last updated October 2026.</footer>
      </article>
    </main>
  )
}
