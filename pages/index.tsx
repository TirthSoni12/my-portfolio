import { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  Code2, 
  Briefcase, 
  GraduationCap,
  ExternalLink,
  ChevronDown,
  Server,
  Database
} from 'lucide-react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold gradient-text">
              Tirth Soni
            </a>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-primary font-semibold'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <a
              href="#contact"
              className="btn-primary text-sm"
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden grid-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="animate-fadeInUp">
            <p className="text-secondary font-mono text-lg mb-4">Hi, I'm</p>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="gradient-text">Tirth Soni</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-300 mb-8">
              Python Developer & Backend Engineer
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              Crafting scalable web applications and APIs with 4+ years of experience in Python, Django, FastAPI, and Blockchain technologies. 
              Available for freelance and remote opportunities worldwide.
            </p>
            
            <div className="flex gap-4 justify-center mb-12">
              <a href="#projects" className="btn-primary">
                View My Work
                <ExternalLink size={18} />
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
                <Mail size={18} />
              </a>
            </div>

            <div className="flex gap-6 justify-center text-gray-400">
              <a href="https://github.com/TirthSoni12" target="_blank" rel="noopener noreferrer"
                 className="hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/tirth-soni-j" target="_blank" rel="noopener noreferrer"
                 className="hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:tirth.1657@gmail.com" className="hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400 hover:text-primary transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding relative">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a dedicated software developer with 4+ years of experience specializing in Python programming and backend engineering. 
                I design and develop scalable web applications and APIs using Flask, Django, and FastAPI.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Proficient in containerization (Docker), cloud platforms (AWS, Azure, GCP), and working with both SQL and NoSQL databases 
                to deliver high-performance data solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I have extensive experience leveraging Artificial Intelligence and Machine Learning to build intelligent, 
                business-focused applications, with additional expertise in Web3 and blockchain technologies.
              </p>
              
              <div className="flex gap-4 mt-8">
                <a href="/resume.pdf" className="btn-primary">
                  Download Resume
                  <Download size={18} />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Code2 size={32} />, label: '4+ Years', desc: 'Experience' },
                { icon: <Briefcase size={32} />, label: '10+', desc: 'Projects Completed' },
                { icon: <Server size={32} />, label: '10+', desc: 'Technologies' },
                { icon: <GraduationCap size={32} />, label: 'B.E.', desc: 'Computer Engineering' }
              ].map((stat, index) => (
                <div key={index} className="glass-card p-6 text-center">
                  <div className="text-primary mb-3 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl font-bold mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-gradient-to-br from-dark via-dark to-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">
            Technical <span className="gradient-text">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Languages',
                icon: <Code2 size={32} />,
                skills: ['Python 3', 'JavaScript', 'SQL', 'Solidity', 'Golang', 'HTML/CSS']
              },
              {
                title: 'Frameworks',
                icon: <Server size={32} />,
                skills: ['Django', 'Flask', 'FastAPI', 'Express.js', 'React.js', 'Bootstrap 5']
              },
              {
                title: 'Databases & Tools',
                icon: <Database size={32} />,
                skills: ['PostgreSQL', 'Redis', 'SQLite', 'Docker', 'Git', 'AWS', 'Azure', 'GCP']
              },
              {
                title: 'Blockchain & APIs',
                icon: <Server size={32} />,
                skills: ['Web3.js', 'Solidity', 'IPFS', 'Hyperledger Fabric', 'OpenAPI', 'REST APIs']
              }
            ].map((category, index) => (
              <div key={index} className="glass-card p-6">
                <div className="text-primary mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">
            Work <span className="gradient-text">Experience</span>
          </h2>

          <div className="space-y-8">
            {[
              {
                company: 'Multiminds Technology',
                role: 'Python Developer',
                period: 'September 2024 - Present',
                location: 'Ahmedabad, India',
                description: 'Leading backend development initiatives and mentoring team members.',
              },
              {
                company: 'Inexture Solutions Ltd.',
                role: 'Python Developer',
                period: 'January 2022 - August 2024',
                location: 'Ahmedabad, India',
                description: 'Developed scalable web applications and APIs using Django, Flask, and FastAPI.',
              }
            ].map((job, index) => (
              <div key={index} className="glass-card p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary">{job.role}</h3>
                      <p className="text-xl text-gray-300">{job.company}</p>
                    </div>
                    <div className="text-gray-400 mt-2 md:mt-0 text-right">
                      <p className="font-mono text-sm">{job.period}</p>
                      <p className="text-sm">{job.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-400">{job.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="gradient-text">Education</span>
            </h3>
            <div className="glass-card p-8 max-w-3xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="text-primary">
                  <GraduationCap size={32} />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold mb-2">Bachelor of Engineering in Computer Engineering</h4>
                  <p className="text-gray-300 mb-2">Government Engineering College, Modasa</p>
                  <div className="flex justify-between items-center text-gray-400">
                    <span className="font-mono text-sm">2018 - 2022</span>
                    <span className="text-primary font-semibold">CGPA: 8.24</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-gradient-to-br from-dark via-primary/5 to-dark">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'TalentBridge',
                description: 'International hiring and recruitment platform with AI-driven candidate assessments and job-matching algorithms.',
                tech: ['Django', 'DRF', 'OpenAPI', 'Gemini API', 'Celery', 'Redis', 'AWS', 'Docker'],
                role: 'Backend Developer'
              },
              {
                title: 'BitsWorks',
                description: 'Full-service crypto bookkeeping platform for digital asset management with automated transaction tagging.',
                tech: ['FastAPI', 'PostgreSQL', 'Docker', 'CoinGecko', 'Jinja2'],
                role: 'Python Developer'
              },
              {
                title: 'ShareSparks',
                description: 'Semi-decentralized content sharing platform with blockchain-based rewards using SparkCoin tokens.',
                tech: ['Django', 'Web3.js', 'Solidity', 'IPFS', 'PostgreSQL', 'MetaMask'],
                role: 'Full Stack + Blockchain'
              },
              {
                title: 'HireHub',
                description: 'Comprehensive resource management system for hiring, invoicing, and contract management.',
                tech: ['Django', 'DRF', 'PostgreSQL', 'Bootstrap 5', 'Ajax'],
                role: 'Full Stack Developer'
              },
              {
                title: 'Supply Chain - Hyperledger',
                description: 'Blockchain-based supply chain solution for product tracking, verification, and transparency.',
                tech: ['Hyperledger Fabric', 'Golang', 'Docker', 'CouchDB', 'Node.js'],
                role: 'Blockchain Developer'
              },
              {
                title: 'More Projects',
                description: 'View my GitHub profile for more open-source contributions and personal projects.',
                tech: ['Python', 'Django', 'FastAPI', 'React', 'Web3'],
                role: 'Various Roles',
                isLink: true
              }
            ].map((project, index) => (
              <div key={index} className="glass-card p-6 flex flex-col">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-primary font-semibold mb-2">Role: {project.role}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech, idx) => (
                        <span key={idx} className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.isLink && (
                    <a href="https://github.com/TirthSoni12" target="_blank" rel="noopener noreferrer"
                       className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors">
                      View on GitHub <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-8">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            I'm currently available for freelance projects and remote opportunities. 
            Let's discuss how I can help bring your ideas to life.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <Mail size={24} />, label: 'Email', value: 'tirth.1657@gmail.com', link: 'mailto:tirth.1657@gmail.com' },
              { icon: <Linkedin size={24} />, label: 'LinkedIn', value: '/in/tirth-soni-j', link: 'https://www.linkedin.com/in/tirth-soni-j' },
              { icon: <Github size={24} />, label: 'GitHub', value: '@tirthsoni', link: 'https://github.com/TirthSoni12' }
            ].map((contact, index) => (
              <a key={index} href={contact.link} target="_blank" rel="noopener noreferrer" 
                 className="glass-card p-6 hover:scale-105 transition-transform">
                <div className="text-primary mb-3 flex justify-center">{contact.icon}</div>
                <p className="text-sm text-gray-400 mb-1">{contact.label}</p>
                <p className="font-mono text-sm">{contact.value}</p>
              </a>
            ))}
          </div>

          <div className="glass-card p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
              />
              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
              ></textarea>
              <button type="submit" className="btn-primary w-full md:w-auto">
                Send Message
                <Mail size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400 mb-4">
            © 2024 Tirth Soni. Available for Freelance & Remote Work.
          </p>
          <div className="flex gap-6 justify-center text-gray-400">
            <a href="https://github.com/TirthSoni12" target="_blank" rel="noopener noreferrer"
               className="hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/tirth-soni-j" target="_blank" rel="noopener noreferrer"
               className="hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:tirth.1657@gmail.com" className="hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}