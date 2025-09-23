import './App.css'

function ProjectCard({ title, description, imageUrl, projectUrl, repoUrl }) {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
          <button>View Project</button>
        </a>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">
          <button>GitHub Repo</button>
        </a>
      </div>
    </div>
  );
}

function App() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of your first project. What was the technology used? What was the main goal?',
      imageUrl: 'https://via.placeholder.com/300',
      projectUrl: '#',
      repoUrl: '#'
    },
    {
      title: 'Project 2',
      description: 'A brief description of your second project. What problem does it solve? What did you learn?',
      imageUrl: 'https://via.placeholder.com/300',
      projectUrl: '#',
      repoUrl: '#'
    },
    {
      title: 'Project 3',
      description: 'A brief description of your third project. Feel free to add more projects to the list.',
      imageUrl: 'https://via.placeholder.com/300',
      projectUrl: '#',
      repoUrl: '#'
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="projects">
          <h2>My Projects</h2>
          <div className="projects-container">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </section>
      </main>

      <footer id="contact">
        <h2>Contact Me</h2>
        <p>You can find me on:</p>
        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </footer>
    </div>
  )
}

export default App