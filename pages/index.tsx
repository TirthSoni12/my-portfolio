import Head from 'next/head';
import { FormEvent, useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Download, Github, Linkedin, Mail, Menu, Moon, Sun, X } from 'lucide-react';

const email = 'tirth.1657@gmail.com';
const github = 'https://github.com/TirthSoni12';
const linkedin = 'https://www.linkedin.com/in/tirth-soni-j';
const nav = ['About', 'Skills', 'Projects', 'Contact'];

const skillGroups = [
  { number: '01', title: 'Languages', items: ['Python', 'JavaScript', 'SQL', 'Solidity', 'Go', 'HTML & CSS'] },
  { number: '02', title: 'Frameworks', items: ['Django', 'Flask', 'FastAPI', 'Express.js', 'React', 'Bootstrap'] },
  { number: '03', title: 'Infrastructure', items: ['PostgreSQL', 'Redis', 'SQLite', 'Docker', 'Git', 'AWS', 'Azure', 'GCP'] },
  { number: '04', title: 'Specialties', items: ['REST APIs', 'OpenAPI', 'Web3.js', 'IPFS', 'Hyperledger Fabric', 'AI integration'] },
];

const projects = [
  { number: '01', title: 'TalentBridge', category: 'AI & recruitment', role: 'Backend developer', description: 'An international hiring platform with AI assisted candidate assessments and job matching.', stack: ['Django', 'DRF', 'Gemini API', 'Celery', 'Redis', 'AWS'] },
  { number: '02', title: 'BitsWorks', category: 'Fintech', role: 'Python developer', description: 'Crypto bookkeeping for digital assets, including automated transaction tagging and reporting workflows.', stack: ['FastAPI', 'PostgreSQL', 'Docker', 'CoinGecko'] },
  { number: '03', title: 'ShareSparks', category: 'Web3', role: 'Full stack & blockchain', description: 'A content sharing platform with blockchain based rewards using SparkCoin tokens.', stack: ['Django', 'Web3.js', 'Solidity', 'IPFS'] },
  { number: '04', title: 'HireHub', category: 'Operations', role: 'Full stack developer', description: 'A resource management system for hiring, invoicing, and contract management.', stack: ['Django', 'DRF', 'PostgreSQL', 'Bootstrap'] },
  { number: '05', title: 'Supply Chain', category: 'Blockchain', role: 'Blockchain developer', description: 'A Hyperledger based system for product tracking, verification, and supply chain transparency.', stack: ['Hyperledger Fabric', 'Go', 'Docker', 'CouchDB'] },
];

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [menuOpen, setMenuOpen] = useState(false);
  const [downloadStatus, setDownloadStatus] = useState('');
  const [contactStatus, setContactStatus] = useState('');

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('main .section').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('portfolio-theme', next); } catch (_) { /* storage may be unavailable */ }
  }

  async function downloadCV() {
    setDownloadStatus('Preparing your download…');
    try {
      const response = await fetch('/Tirth-Soni-CV.pdf');
      if (!response.ok) throw new Error('CV unavailable');
      const blobUrl = URL.createObjectURL(await response.blob());
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'Tirth-Soni-CV.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
      setDownloadStatus('CV download started.');
    } catch (_) {
      setDownloadStatus('Download failed. Please email me for a copy.');
    }
  }

  function handleContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const name = String(fields.get('name') || '').trim();
    const sender = String(fields.get('email') || '').trim();
    const subject = String(fields.get('subject') || '').trim();
    const message = String(fields.get('message') || '').trim();
    const body = `${message}\n\nFrom: ${name} (${sender})`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setContactStatus('Your email app is opening with the message ready to send.');
  }

  return (
    <>
      <Head>
        <title>Tirth Soni — Python Developer & Backend Engineer</title>
        <meta name="description" content="Tirth Soni is a Python developer and backend engineer building scalable APIs, web applications, and blockchain solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={theme === 'dark' ? '#111814' : '#f7f8f4'} />
        <meta property="og:title" content="Tirth Soni — Python Developer & Backend Engineer" />
        <meta property="og:description" content="Backend engineering, thoughtful architecture, and products built to last." />
        <meta property="og:type" content="website" />
      </Head>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home" onClick={() => setMenuOpen(false)} aria-label="Tirth Soni, home">tirth<span className="brand-dot">.</span></a>
          <nav id="mobile-navigation" className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            {nav.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          </nav>
          <div className="header-actions">
            <button className="icon-button theme-button" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
              {theme === 'light' ? <Moon size={19} /> : <Sun size={19} />}
            </button>
            <a className="header-contact" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
            <button className="icon-button menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation">
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>
      <main id="main">
        <section id="home" className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR FREELANCE & REMOTE WORK</div>
            <h1>Building the<br /><span className="serif-italic">logic behind</span><br />great products<span className="heading-dot">.</span></h1>
            <p className="hero-description">I&apos;m <strong>Tirth Soni</strong>, a Python developer and backend engineer building scalable APIs and web applications with a focus on reliable, useful experiences.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={18} /></a>
              <a className="button button-text" href="#contact">Get in touch <ArrowRight size={17} /></a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
            <div className="visual-card"><span className="visual-card-label">CURRENT FOCUS</span><span className="visual-code">{`{`}</span><span className="visual-line">&nbsp;&nbsp;build: <em>&quot;the backend&quot;</em>,</span><span className="visual-line">&nbsp;&nbsp;ship: <em>&quot;with purpose&quot;</em></span><span className="visual-code">{`}`}</span><span className="visual-card-footer"><span className="visual-pulse" /> SYSTEMS ONLINE <span>01 / 05</span></span></div>
            <div className="visual-tag tag-top">PYTHON · APIs · CLOUD</div><div className="visual-tag tag-bottom">ENGINEERING WITH INTENT ↗</div>
          </div>
          <a className="scroll-cue" href="#about">SCROLL TO EXPLORE <ArrowDown size={15} /></a>
        </section>

        <section id="about" className="section section-soft">
          <div className="container about-grid">
            <div><p className="section-kicker">01 / ABOUT</p><h2>Thoughtful code.<br /><span className="serif-italic">Real impact.</span></h2></div>
            <div className="about-copy"><p>I&apos;m a software developer with 5+ years of experience specializing in Python and backend engineering. I design and build scalable web applications and APIs using Django, Flask, and FastAPI.</p><p>My work spans cloud platforms, SQL and NoSQL databases, AI powered applications, and Web3. I enjoy turning complex requirements into systems that are clear, maintainable, and ready to grow.</p><button className="text-link" type="button" onClick={downloadCV}><Download size={18} /> Download CV <ArrowUpRight size={16} /></button><p className="action-status" role="status" aria-live="polite">{downloadStatus}</p></div>
          </div>
          <div className="container metrics"><div><strong>5<span>+</span></strong><span>Years of experience</span></div><div><strong>25<span>+</span></strong><span>Projects completed</span></div><div><strong>B.E.</strong><span>Computer Engineering</span></div></div>
        </section>

        <section id="skills" className="section">
          <div className="container"><div className="section-heading"><div><p className="section-kicker">02 / EXPERTISE</p><h2>Tools of the <span className="serif-italic">trade.</span></h2></div><p>A versatile toolkit for building from the database up to the user experience.</p></div><div className="skills-grid">{skillGroups.map(group => <article className="skill-card" key={group.title}><span className="card-number">{group.number} / 04</span><h3>{group.title}</h3><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></div>
        </section>

        <section id="projects" className="section">
          <div className="container"><div className="section-heading"><div><p className="section-kicker">03 / SELECTED WORK</p><h2>Projects with <span className="serif-italic">purpose.</span></h2></div><p>A selection of platforms and systems I&apos;ve helped bring to life.</p></div><div className="projects-grid">{projects.map((project, index) => <article className={`project-card ${index === 0 ? 'project-featured' : ''}`} key={project.title}><div className="project-top"><span className="card-number">PROJECT / {project.number}</span><span className="project-category">{project.category}</span></div><div className="project-content"><div><h3>{project.title}</h3><p className="project-role">{project.role}</p></div><p className="project-description">{project.description}</p><div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div></div></article>)}</div><div className="projects-footer"><p>Some client projects are private. More public work is available on GitHub.</p><a className="text-link" href={github} target="_blank" rel="noopener noreferrer">Explore GitHub <ArrowUpRight size={17} /></a></div></div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-grid"><div><p className="section-kicker">04 / CONTACT</p><h2>Let&apos;s make<br /><span className="serif-italic">something work.</span></h2><p className="contact-intro">Have a project, a role, or an idea in mind? Tell me a little about it and let&apos;s start a conversation.</p><a className="contact-email" href={`mailto:${email}`}>{email} <ArrowUpRight size={21} /></a><div className="social-links"><a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={19} /> GitHub <ArrowUpRight size={14} /></a><a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={19} /> LinkedIn <ArrowUpRight size={14} /></a></div></div><form className="contact-form" onSubmit={handleContact}><div className="form-row"><label>Your name<input name="name" type="text" autoComplete="name" required placeholder="Jane Smith" /></label><label>Email address<input name="email" type="email" autoComplete="email" required placeholder="jane@example.com" /></label></div><label>Subject<input name="subject" type="text" required placeholder="A project idea" /></label><label>Message<textarea name="message" rows={5} required placeholder="Tell me a bit about what you're building..." /></label><button className="button button-primary" type="submit">Prepare email <Mail size={18} /></button><p className="form-note">This opens your email app with your message ready to send.</p><p className="action-status" role="status" aria-live="polite">{contactStatus}</p></form></div>
        </section>
      </main>
      <footer className="site-footer"><div className="container footer-inner"><a className="brand" href="#home">tirth<span className="brand-dot">.</span></a><p>© {new Date().getFullYear()} Tirth Soni. Built with care.</p><a href="#home">Back to top ↑</a></div></footer>
    </>
  );
}
