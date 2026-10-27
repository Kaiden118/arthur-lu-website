import { ArrowUpRight } from 'lucide-react'

const email = 'zechuanl@usc.edu'
const githubUrl = 'https://github.com/Kaiden118'
const linkedinUrl = 'https://www.linkedin.com/in/zechuan-lu-6923a1371'
const runsleuthRepository = 'https://github.com/Kaiden118/RunSleuth-Evidence-Grounded-ML-Training-Failure-Diagnosis-and-Repair-Verification'
const cmcdRepository = 'https://github.com/Kaiden118/Cross-Modality-Conditional-Diffusion-Model'
const motionCaptureRepository = 'https://github.com/Kaiden118/MotionCaptureSystem'
const berberinePaper = 'https://doi.org/10.1016/j.ijbiomac.2024.133370'

// The GitHub avatar; replace public/avatar.jpg to change it, or set null to show the AL monogram.
const photo: string | null = '/avatar.jpg'

const contacts = [
  { label: 'Email', value: email, href: `mailto:${email}` },
  { label: 'GitHub', value: 'Kaiden118', href: githubUrl },
  { label: 'LinkedIn', value: 'zechuan-lu', href: linkedinUrl },
  { label: 'Resume', value: 'PDF, one page', href: '/resume.pdf' },
  { label: 'Based in', value: 'Los Angeles, CA' },
]

const sections = [
  { id: 'work', label: 'Selected work' },
  { id: 'publications', label: 'Publications' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
]

type Link = { label: string; href: string }

type Project = {
  id: string
  title: string
  subtitle: string
  href: string
  period: string
  context: string
  summary: string
  results?: {
    columns: string[]
    rows: { name: string; values: string[]; highlight?: boolean }[]
    note: string
  }
  facts?: string[]
  // A 3:2 thumbnail shown beside the project, linking to the full figure.
  image: { thumbnail: string; full: string; alt: string }
  tags: string[]
  links: Link[]
}

const projects: Project[] = [
  {
    id: 'runsleuth',
    title: 'RunSleuth',
    subtitle: 'Verifying the repairs LLM agents make to deep-learning training code',
    href: runsleuthRepository,
    period: 'Sep 2026 – present',
    context: 'Independent research',
    summary:
      'Training bugs are often silent: the run finishes and accuracy barely moves. When an LLM agent says it fixed one, RunSleuth checks each requirement of the task against evidence recorded while the repaired project trains, runs short probes where that evidence is missing, and then accepts the repair, rejects it or sends it to a person.',
    results: {
      columns: ['Verifier', 'Wrong accepted', 'Correct rejected', 'Sent to review'],
      rows: [
        { name: 'Metric gate', values: ['12 / 16', '7 / 164', '0 / 180'] },
        { name: 'Claude Sonnet 5.5 as reviewer', values: ['2 / 16', '0 / 164', '2 / 180'] },
        { name: 'RunSleuth v2', values: ['0 / 16', '0 / 164', '44 / 180'], highlight: true },
      ],
      note:
        'Held-out test split: 180 repairs written by five LLM agents for six faults in pathology (Camelyon17-WILDS) and dermoscopy (HAM10000) pipelines. Preliminary until the blind review of the labels is complete.',
    },
    image: {
      thumbnail: '/work/runsleuth-thumb.svg',
      full: '/work/runsleuth-overview.svg',
      alt: 'RunSleuth v2 judges each requirement, runs probes chosen by the evidence gap, and accepts, sends to review or rejects the repair.',
    },
    tags: ['Python', 'PyTorch', 'LLM agents', 'Medical imaging'],
    links: [{ label: 'Code', href: runsleuthRepository }],
  },
  {
    id: 'cmcd',
    title: 'CMCD',
    subtitle: 'Conditional diffusion for translating brain MRI between T1 and T2 contrast',
    href: cmcdRepository,
    period: 'Jun 2025 – May 2026',
    context: 'Undergraduate thesis · ICONIP 2026',
    summary:
      'A PyTorch diffusion model that translates in both directions. Anatomy-consistent structural guidance keeps the anatomy in place while denoising, cross-attention and classifier-free guidance condition on the source scan, and training combines MSE, L1 and SSIM losses.',
    facts: ['27.47 dB PSNR, T1 → T2 on BraTS 2020', '+1.74 dB over the best of six baselines', '20K+ slices at 256 × 256'],
    image: {
      thumbnail: '/work/cmcd-thumb.jpg',
      full: '/work/cmcd-translation.jpg',
      alt: 'Brain MRI slices: input, ground truth and CMCD output for T1 to T2 (top) and T2 to T1 (bottom).',
    },
    tags: ['PyTorch', 'Diffusion models', 'MRI'],
    links: [{ label: 'Code', href: cmcdRepository }],
  },
  {
    id: 'tracking',
    title: 'Dual-camera object tracking',
    subtitle: 'Real-time 6-DoF object pose from two camera views',
    href: motionCaptureRepository,
    period: 'Oct 2024 – Apr 2025',
    context: 'Motion capture system',
    summary:
      'Extends OnePose++, an offline single-camera pose pipeline, to live tracking from two cameras whose views are fused into one estimate. A Flask and Socket.IO backend with a Vue.js interface stores each object’s reference data, so a registered object can be tracked again without recapturing and preprocessing video.',
    facts: ['6-DoF tracking at 60 FPS', '3 objects across changing scenes'],
    image: {
      thumbnail: '/work/tracking-thumb.jpg',
      full: '/work/mocap-dual-camera.jpg',
      alt: 'Camera A and camera B views with estimated 3D bounding boxes around two objects on a desk.',
    },
    tags: ['Python', 'Computer vision', 'Flask', 'Vue.js'],
    links: [{ label: 'Code', href: motionCaptureRepository }],
  },
]

const self = 'Lu, Z.'

const publications = [
  {
    year: '2026',
    title: 'CMCD: Conditional Diffusion Model for Medical Image Modality Translation',
    authors: ['Lu, Z.', 'Huang, M.', 'He, X.'],
    venue: 'International Conference on Neural Information Processing (ICONIP), 2026. Accepted.',
    links: [{ label: 'Code', href: cmcdRepository }],
  },
  {
    year: '2024',
    title:
      'Interactions of Three Berberine Mid-Chain Fatty Acid Salts with Bovine Serum Albumin (BSA): Spectroscopic Analysis and Molecular Docking',
    authors: ['Fan, S.', 'Lu, Z.', 'Yan, Z.', 'Hu, L.'],
    venue: 'International Journal of Biological Macromolecules, 274, 133370, 2024.',
    links: [{ label: 'DOI', href: berberinePaper }],
  },
]

const education = [
  {
    school: 'University of Southern California',
    period: 'Aug 2026 – May 2028',
    details: ['M.S. in Computer Science, expected May 2028. Los Angeles.'],
  },
  {
    school: 'University of Nottingham Ningbo China',
    period: 'Sep 2022 – Jul 2026',
    details: [
      'B.S. (Hons) in Computer Science with Artificial Intelligence, Second-Class Honours (Division One). Ningbo.',
      'Thesis: Cross-Modality Conditional Diffusion for T1 & T2 MRI Translation.',
    ],
  },
]

const skills = [
  { label: 'Languages', items: ['Python', 'C++', 'JavaScript', 'Java', 'C#', 'SQL'] },
  { label: 'ML & GenAI', items: ['PyTorch', 'OpenCV', 'Hugging Face Transformers', 'Diffusion models', 'LLM agents', 'OpenAI API'] },
  { label: 'Engineering', items: ['Flask', 'FastAPI', 'Vue.js', 'Socket.IO', 'Git', 'Linux'] },
]

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

function Authors({ names }: { names: string[] }) {
  return (
    <>
      {names.map((name, index) => (
        <span key={name}>
          {index > 0 && (index === names.length - 1 ? ', & ' : ', ')}
          {name === self ? <strong>{name}</strong> : name}
        </span>
      ))}
    </>
  )
}

function ProjectEntry({ project }: { project: Project }) {
  return (
    <article className="project" aria-labelledby={`${project.id}-title`}>
      <a className="thumb" href={project.image.full} target="_blank" rel="noreferrer" aria-label={`Open the ${project.title} figure at full size`}>
        <img src={project.image.thumbnail} width={720} height={480} alt={project.image.alt} loading="lazy" decoding="async" />
      </a>

      <header className="project-head">
        <h3 id={`${project.id}-title`} className="project-title">
          <ExternalLink href={project.href}>{project.title}</ExternalLink>
        </h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="meta">
          {project.period} · {project.context}
        </p>
      </header>

      <div className="project-body">
        <p className="project-summary">{project.summary}</p>

        {project.results && (
          <div className="results">
            <div className="results-scroll">
              <table aria-describedby={`${project.id}-results-note`}>
                <thead>
                  <tr>
                    {project.results.columns.map((column) => (
                      <th key={column} scope="col">{column}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {project.results.rows.map((row) => (
                    <tr key={row.name} className={row.highlight ? 'is-ours' : undefined}>
                      <th scope="row">{row.name}</th>
                      {row.values.map((value, index) => (
                        <td key={project.results!.columns[index + 1]}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p id={`${project.id}-results-note`} className="results-note">{project.results.note}</p>
          </div>
        )}

        {project.facts && (
          <ul className="facts" aria-label={`${project.title} results`}>
            {project.facts.map((fact) => <li key={fact}>{fact}</li>)}
          </ul>
        )}

        <footer className="project-foot">
          <ul className="tags" aria-label={`${project.title} technologies`}>
            {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
          </ul>
          <div className="links">
            {project.links.map((link) => (
              <ExternalLink key={link.href} href={link.href}>
                {link.label}
                <ArrowUpRight aria-hidden="true" />
              </ExternalLink>
            ))}
          </div>
        </footer>
      </div>
    </article>
  )
}

export default function Page() {
  return (
    <div className="page">
      <a className="skip-link" href="#main">Skip to content</a>

      <aside className="profile" aria-label="Profile">
        <div className="profile-inner">
          <div className="profile-id">
            {photo ? (
              <img className="portrait" src={photo} width={88} height={88} alt="Arthur Lu’s avatar" />
            ) : (
              <div className="monogram" aria-hidden="true">AL</div>
            )}
            <h1 className="name">Arthur Lu</h1>
            <p className="alias">Publishes as Zechuan Lu</p>
            <p className="role">M.S. Computer Science student at the University of Southern California</p>
            <p className="status">
              <span className="status-dot" aria-hidden="true" />
              <span>Open to Summer 2027 internships in ML, AI and software engineering</span>
            </p>
          </div>

          <div className="profile-links">
            <dl className="contact">
              {contacts.map((contact) => (
                <div key={contact.label}>
                  <dt>{contact.label}</dt>
                  <dd>
                    {contact.href ? (
                      contact.href.startsWith('mailto:') ? (
                        <a href={contact.href}>{contact.value}</a>
                      ) : (
                        <ExternalLink href={contact.href}>{contact.value}</ExternalLink>
                      )
                    ) : (
                      contact.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <nav className="toc" aria-label="Sections">
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`}>{section.label}</a>
              ))}
            </nav>
          </div>
        </div>
      </aside>

      <main id="main" className="main-col">
        <section className="intro" aria-label="About">
          <p>
            I’m a first-year M.S. student in Computer Science at USC. I build machine learning systems for medical
            imaging, and tools that check whether ML code really does what it claims.
          </p>
          <p>
            My current project, <a href="#runsleuth-title">RunSleuth</a>, decides whether to trust the fixes LLM agents
            make to deep-learning training code, using evidence from the training run itself. Before USC I studied
            Computer Science with Artificial Intelligence at the University of Nottingham Ningbo China, where my thesis
            on diffusion models for MRI translation became a first-author paper accepted at ICONIP 2026.
          </p>
        </section>

        <section id="work" aria-labelledby="work-heading">
          <h2 id="work-heading" className="section-title">Selected work</h2>
          <div className="projects">
            {projects.map((project) => <ProjectEntry key={project.id} project={project} />)}
          </div>
        </section>

        <section id="publications" aria-labelledby="publications-heading">
          <h2 id="publications-heading" className="section-title">Publications</h2>
          <ol className="pubs">
            {publications.map((publication) => (
              <li key={publication.title} className="pub">
                <span className="pub-year">{publication.year}</span>
                <div>
                  <p className="pub-title">{publication.title}</p>
                  <p className="pub-authors"><Authors names={publication.authors} /></p>
                  <p className="pub-venue">{publication.venue}</p>
                  <p className="links pub-links">
                    {publication.links.map((link) => (
                      <ExternalLink key={link.href} href={link.href}>
                        {link.label}
                        <ArrowUpRight aria-hidden="true" />
                      </ExternalLink>
                    ))}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="education" aria-labelledby="education-heading">
          <h2 id="education-heading" className="section-title">Education</h2>
          <ul className="edu">
            {education.map((entry) => (
              <li key={entry.school} className="edu-row">
                <span className="edu-school">{entry.school}</span>
                <span className="edu-period">{entry.period}</span>
                {entry.details.map((detail) => <p key={detail} className="edu-detail">{detail}</p>)}
              </li>
            ))}
          </ul>
        </section>

        <section id="skills" aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="section-title">Skills</h2>
          <dl className="skills">
            {skills.map((group) => (
              <div key={group.label}>
                <dt>{group.label}</dt>
                <dd>{group.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <footer className="site-foot">
          <span>Last updated October 2026</span>
          <a href={`mailto:${email}`}>{email}</a>
        </footer>
      </main>
    </div>
  )
}
